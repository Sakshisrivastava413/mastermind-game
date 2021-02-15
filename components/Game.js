import React, { useState } from "react";

const createGrid = (size) => Array(size).fill(0).map(() => ["#fff", "#fff", "#fff", "#fff"]);
const Game = () => {
    const [grid, setGrid] = useState(createGrid(10));
    return (
        <div>
        </div>
    )
};

export default Game;