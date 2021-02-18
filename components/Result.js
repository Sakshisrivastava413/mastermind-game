import React from "react";

const Result = ({
  result: { rowsCovered, hiddenCode, isWinner },
  openNewGame,
}) => (
  <div className="p-8 text-center">
    <div className="text-4xl mb-8">You {isWinner ? "Won" : "Lose"}!!!</div>
    {isWinner && (
      <div className="text-2xl mb-6">
        You won in <span className="font-bold">{rowsCovered}</span> turns.
      </div>
    )}
    <div className="text-xl text-center mb-4">Hidden Code:</div>
    <div className="flex items-center justify-center mb-12 space-x-2">
      {hiddenCode &&
        hiddenCode.map((color, col) => (
          <div
            key={col}
            className="border border-black rounded-full h-9 w-9"
            style={{ background: color }}
          ></div>
        ))}
    </div>
    <div
      className="text px-4 py-2 border rounded border-black cursor-pointer hover:text-white hover:bg-blue-400"
      onClick={openNewGame}
    >
      New Game
    </div>
  </div>
);

export default Result;
