import React, { useState, useEffect } from "react";
import { cloneDeep, random, isEqual } from "lodash";
import { INITIAL_CELL_VALUE, ROW_SIZE, COL_SIZE } from "../constants";
import {
  createGrid,
  generateHiddenCode,
  getRowStatus,
  createRow,
} from "../utils";
import Row from "../components/Row";

const Game = ({ selectedColor, result }) => {
  const [grid, setGrid] = useState(
    createGrid(ROW_SIZE, COL_SIZE, INITIAL_CELL_VALUE)
  );
  const [currentRow, setCurrentRow] = useState(0);
  const [isRowValidate, setRowValidate] = useState(false);
  const [gridStatus, setGridStatus] = useState(
    createGrid(ROW_SIZE, COL_SIZE, INITIAL_CELL_VALUE)
  );
  const [hiddenCode, setHiddenCode] = useState(generateHiddenCode());
useEffect(() => console.log(hiddenCode), [])
  const changeColor = ({ row, col }) => {
    if (currentRow !== row) return;

    const newGrid = cloneDeep(grid);
    newGrid[row][col] = selectedColor;
    setGrid(newGrid);
    if (!newGrid[currentRow].includes(INITIAL_CELL_VALUE)) setRowValidate(true);
  };

  const validateRow = () => {
    const newGrid = cloneDeep(grid);
    const curRowState = newGrid[currentRow];
    const nextRow = currentRow + 1;
    const resultState = { rowsCovered: nextRow, hiddenCode };
    if (isEqual(hiddenCode, curRowState)) {
      result({ ...resultState, isWinner: true });
      resetGame();
    } else if (nextRow == ROW_SIZE) {
      result({ ...resultState, isWinner: false });
      resetGame();
    } else {
      const [colorPosMatchCount, colorMatchCount] = getRowStatus(
        curRowState,
        hiddenCode
      );
      updateRowStatus(colorPosMatchCount, colorMatchCount);
      setCurrentRow(nextRow);
    }
    setRowValidate(false);
  };

  const updateRowStatus = (colorPosMatchCount, colorMatchCount) => {
    if (!colorPosMatchCount && !colorMatchCount) return;
    const newStatusGrid = cloneDeep(gridStatus);
    const rowStatus = createRow(COL_SIZE, INITIAL_CELL_VALUE);

    while (colorPosMatchCount) {
      const index = random(0, COL_SIZE - 1);
      if (rowStatus[index] === INITIAL_CELL_VALUE) {
        rowStatus[index] = "red";
        colorPosMatchCount--;
      }
    }

    while (colorMatchCount) {
      const index = random(0, COL_SIZE - 1);
      if (rowStatus[index] === INITIAL_CELL_VALUE) {
        rowStatus[index] = "black";
        colorMatchCount--;
      }
    }

    newStatusGrid[currentRow] = rowStatus;
    setGridStatus(newStatusGrid);
  };

  const resetGame = () => {
    setGrid(createGrid(ROW_SIZE, COL_SIZE, INITIAL_CELL_VALUE));
    setGridStatus(createGrid(ROW_SIZE, COL_SIZE, INITIAL_CELL_VALUE));
    setCurrentRow(0);
    setHiddenCode(generateHiddenCode());
  };

  return (
    <div className="space-y-2">
      {grid.map((row, rowNo) => (
        <div
          key={rowNo}
          className={`${currentRow === rowNo ? "border-2" : "border"} ${
            currentRow != rowNo ? "border-gray-100" : "border-black"
          } h-14 w-full p-2 relative`}
        >
          <Row
            colors={row}
            row={rowNo}
            onCellClick={changeColor}
            status={gridStatus[rowNo]}
            activeRow={currentRow}
          />
          {currentRow === rowNo && isRowValidate && (
            <div className="absolute left-64 inset-y-1/4">
              <img
                onClick={validateRow}
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
