import React from "react";

const NewGame = ({ resetGame, closeModal }) => {
  return (
    <div className="p-8 text-center">
      <div className="text-2xl mb-8">New Game</div>
      <div className="text-xl mb-4">
        Are you sure you want to open a new game? The current state will be
        lost.
      </div>
      <div className="flex space-x-2">
        <div
          className="text w-1/2 px-4 py-2 border rounded border-black cursor-pointer bg-green-300 hover:text-white hover:bg-green-400"
          onClick={resetGame}
        >
          Yes
        </div>
        <div
          className="text w-1/2 px-4 py-2 border rounded border-black cursor-pointer bg-red-300 hover:text-white hover:bg-red-400"
          onClick={closeModal}
        >
          No
        </div>
      </div>
    </div>
  );
};

export default NewGame;
