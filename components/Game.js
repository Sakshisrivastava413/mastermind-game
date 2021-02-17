import React, { useState } from "react";
import Row from "../components/Row";
import { isEqual, cloneDeep } from "lodash";

const createGrid = (size) =>
  Array(size)
    .fill(0)
    .map(() => ["#fff", "#fff", "#fff", "#fff"]);

const gameState = [
  "#F545F3", //pink
  "#45F5F5", //lignt-blue
  "#895252", //brown
  "#B4ADAD", // grey
];

const Game = ({ pickedColor }) => {
  const [grid, setGrid] = useState(createGrid(10));
  const [currentRow, setCurrentRow] = useState(0);
  const [rowStatus, setRowStatus] = useState(false);
  const [gridStatus, setGridStatus] = useState(createGrid(10));

  const changeColor = ({ row, col }) => {
    if (currentRow == row) {
      const newGrid = cloneDeep(grid);
      newGrid[row][col] = pickedColor;
      setGrid(newGrid);
      if (newGrid[currentRow].indexOf("#fff") == -1) setRowStatus(true);
    }
  };

  const checkRow = () => {
    updateRowStatus();
    setCurrentRow(currentRow + 1);
    setRowStatus(false);
  };

  const updateRowStatus = () => {
    const newGrid = cloneDeep(grid);
    const newStatusGrid = cloneDeep(gridStatus);
    const curRow = newGrid[currentRow];
    if (isEqual(gameState, curRow)) {
      alert("you won");
      return;
    }
    const currentRowStatus = ["#fff", "#fff", "#fff", "#fff"];
    curRow.forEach((cur, i) => {
      if (gameState[i] == cur) currentRowStatus[i] = "red";
    });
    curRow.forEach((cur, i) => {
      if (currentRowStatus[i] == "#fff") {
        const index = gameState.indexOf(cur);
        if (index != -1 && i != index && currentRowStatus[index] == "#fff")
          currentRowStatus[index] = "black";
      }
    });
    newStatusGrid[currentRow] = currentRowStatus;
    setGridStatus(newStatusGrid);
  };

  return (
    <div className="space-y-2">
      {grid.map((row, rowNo) => (
        <div
          key={rowNo}
          className={`${
            currentRow == rowNo ? "border-2" : "border"
          } border-black h-14 w-full p-2 relative`}
        >
          <Row
            colors={row}
            row={rowNo}
            picked={pickedColor}
            getCell={changeColor}
            status={gridStatus[rowNo]}
          />
          {currentRow == rowNo && rowStatus && (
            <div className="absolute left-64 inset-y-1/4">
              <img onClick={checkRow} src="check.svg" className="h-6" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Game;
