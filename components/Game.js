import React, { useState } from "react";
import Row from "../components/Row";

const createGrid = (size) =>
  Array(size)
    .fill(0)
    .map(() => ["#fff", "#fff", "#fff", "#fff"]);

const Game = ({ pickedColor }) => {
  const [grid, setGrid] = useState(createGrid(10));
  const [currentRow, setCurrentRow] = useState(0);

  const changeColor = ({ row, col }) => {
    if (currentRow == row) {
      const temp = [...grid];
      temp[row][col] = pickedColor;
      setGrid(temp);
    }
  };

  return (
    <div className="space-y-2">
      {grid.map((row, rowNo) => (
        <div
          key={rowNo}
          className={`border ${
            currentRow == rowNo ? "border-black" : "border-red-500"
          } h-14 w-full p-2 relative`}
        >
          <Row
            colors={row}
            row={rowNo}
            picked={pickedColor}
            getCell={changeColor}
          />
        </div>
      ))}
    </div>
  );
};

export default Game;
