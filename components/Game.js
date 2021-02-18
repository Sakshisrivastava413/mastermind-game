import React, { useState } from "react";
import Row from "../components/Row";
import { isEqual, cloneDeep, random } from "lodash";

const createGrid = (rows, cols, value) =>
  Array(rows)
    .fill(0)
    .map(() => new Array(cols).fill(0).map(() => value));

const gameState = [
  "#FC7DEF", //pink
  "#F0B27A", //orange
  "#CA6F1E", //brown
  "#CACFD2", // grey
];

const Game = ({ pickedColor, result }) => {
  const [grid, setGrid] = useState(createGrid(10, 4, "#fff"));
  const [currentRow, setCurrentRow] = useState(0);
  const [rowState, setRowDone] = useState(false);
  const [gridStatus, setGridStatus] = useState(createGrid(10, 4, "#fff"));

  const changeColor = ({ row, col }) => {
    if (currentRow == row) {
      const newGrid = cloneDeep(grid);
      newGrid[row][col] = pickedColor;
      setGrid(newGrid);
      if (newGrid[currentRow].indexOf("#fff") == -1) setRowDone(true);
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

    if (isEqual(gameState, curRow) || nextRow == 10) {
      result();
      resetGame();
    } else {
      setCurrentRow(nextRow);

      curRow.forEach((color, col) => {
        const gameStateColor = gameState[col];
        if (gameStateColor === color) colorAndPositionMatchCount++;
        else
          colorFreq.set(
            gameStateColor,
            colorFreq.has(gameStateColor) ? colorFreq.get(gameStateColor) + 1 : 1
          );
      });

      curRow.forEach((color, col) => {
        if (
          colorFreq.has(color) &&
          colorFreq.get(color) > 0 &&
          color != gameState[col]
        ) {
          colorFreq.set(color, colorFreq.get(color) - 1);
          onlyColorMatchCount++;
        }
      });
    }
    return [colorAndPositionMatchCount, onlyColorMatchCount];
  };

  const updateRowStatus = (colorPosMatch, colorMatch) => {
    if(!colorPosMatch && !colorMatch) return;
    const newStatusGrid = cloneDeep(gridStatus);
    const rowStatus = createGrid(1, 4, '#fff')[0];

    while(colorPosMatch) {
      const index = random(0, 4);
      if(rowStatus[index] === '#fff') {
        rowStatus[index] = 'red';
        colorPosMatch--;
      }
    }

    while(colorMatch) {
      const index = random(0, 4);
      if(rowStatus[index] === '#fff') {
        rowStatus[index] = 'black';
        colorMatch--;
      }
    }

    newStatusGrid[currentRow] = rowStatus;
    setGridStatus(newStatusGrid);
  };

  const resetGame = () => {
    setGrid(createGrid(10, 4, "#fff"));
    setGridStatus(createGrid(10, 4, "#fff"));
    setCurrentRow(0);
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
