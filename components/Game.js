import React, { useState } from "react";
import Row from "../components/Row";

const createGrid = (size) => Array(size).fill(0).map(() => ["#fff", "#fff", "#fff", "#fff"]);
const Game = ({color}) => {
    const [grid, setGrid] = useState(createGrid(10));
    const [currentRow, setCurrentRow] = useState(0);

    return (
        <div className="space-y-2">
            {grid.map((row, i) => (
              <div key={i} className={`border ${currentRow == i ? 'border-black' : 'border-red-500'} h-14 w-full p-2 relative`}>
                <Row colors={row} />
              </div>
            ))}
        </div>
    )
};

export default Game;