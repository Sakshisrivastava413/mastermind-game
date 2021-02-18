import React, { useState, useEffect } from "react";
import Row from "../components/Row";
import { isEqual, cloneDeep, random } from "lodash";
import availableColors from "../colors.constant";

const createGrid = (rows, cols, value) =>
  Array(rows)
    .fill(0)
    .map(() => new Array(cols).fill(0).map(() => value));

const getCode = () => {
  const hiddenCode = [];
  while (hiddenCode.length != 4) {
    const color = availableColors[random(0, availableColors.length - 1)];
    if (hiddenCode.indexOf(color) == -1) {
      hiddenCode.push(color);
    }
  }
  return hiddenCode;
};

const CELL_COLOR = "#fff";

const Game = ({ pickedColor, result }) => {
  const [grid, setGrid] = useState(createGrid(10, 4, CELL_COLOR));
  const [currentRow, setCurrentRow] = useState(0);
  const [rowState, setRowDone] = useState(false);
  const [gridStatus, setGridStatus] = useState(createGrid(10, 4, CELL_COLOR));
  const [hiddenCode, generateHiddenCode] = useState(getCode());

  const changeColor = ({ row, col }) => {
    if (currentRow == row) {
      const newGrid = cloneDeep(grid);
      newGrid[row][col] = pickedColor;
      setGrid(newGrid);
      if (newGrid[currentRow].indexOf(CELL_COLOR) == -1) setRowDone(true);
    }
  };

  const checkRow = () => {
    const [colorPosMatch, colorMatch] = getRowStatus();
    updateRowStatus(colorPosMatch, colorMatch);
    setRowDone(false);
  };

  const getRowStatus = () => {
    const newGrid = cloneDeep(grid);
    const curRow = newGrid[currentRow];
    const nextRow = currentRow + 1;
    let colorAndPositionMatchCount = 0;
    let onlyColorMatchCount = 0;
    const colorFreq = new Map();

    if (isEqual(hiddenCode, curRow) || nextRow == 10) {
      result();
      resetGame();
    } else {
      setCurrentRow(nextRow);

      curRow.forEach((color, col) => {
        const hiddenCodeColor = hiddenCode[col];
        if (hiddenCodeColor === color) colorAndPositionMatchCount++;
        else
          colorFreq.set(
            hiddenCodeColor,
            colorFreq.has(hiddenCodeColor)
              ? colorFreq.get(hiddenCodeColor) + 1
              : 1
          );
      });

      curRow.forEach((color, col) => {
        if (
          colorFreq.has(color) &&
          colorFreq.get(color) > 0 &&
          color != hiddenCode[col]
        ) {
          colorFreq.set(color, colorFreq.get(color) - 1);
          onlyColorMatchCount++;
        }
      });
    }
    return [colorAndPositionMatchCount, onlyColorMatchCount];
  };

  const updateRowStatus = (colorPosMatch, colorMatch) => {
    if (!colorPosMatch && !colorMatch) return;
    const newStatusGrid = cloneDeep(gridStatus);
    const rowStatus = createGrid(1, 4, CELL_COLOR)[0];

    while (colorPosMatch) {
      const index = random(0, 4);
      if (rowStatus[index] === CELL_COLOR) {
        rowStatus[index] = "red";
        colorPosMatch--;
      }
    }

    while (colorMatch) {
      const index = random(0, 4);
      if (rowStatus[index] === CELL_COLOR) {
        rowStatus[index] = "black";
        colorMatch--;
      }
    }

    newStatusGrid[currentRow] = rowStatus;
    setGridStatus(newStatusGrid);
  };

  const resetGame = () => {
    setGrid(createGrid(10, 4, CELL_COLOR));
    setGridStatus(createGrid(10, 4, CELL_COLOR));
    setCurrentRow(0);
    generateHiddenCode(getCode());
  };

  return (
    <div className="space-y-2">
      {grid.map((row, rowNo) => (
        <div
          key={rowNo}
          className={`${currentRow == rowNo ? "border-2" : "border"} ${
            currentRow != rowNo ? "border-gray-100" : "border-black"
          } h-14 w-full p-2 relative`}
        >
          <Row
            colors={row}
            row={rowNo}
            picked={pickedColor}
            getCell={changeColor}
            status={gridStatus[rowNo]}
            activeRow={currentRow}
          />
          {currentRow == rowNo && rowState && (
            <div className="absolute left-64 inset-y-1/4">
              <img
                onClick={checkRow}
                src="check.svg"
                className="h-6 cursor-pointer"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Game;
