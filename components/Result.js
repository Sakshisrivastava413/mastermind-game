import React from "react";
import useModal from "../hooks/useModal";
import Modal from "./Modal";
import NewGame from "./NewGame";

const Result = ({ result: { rowsCovered, hiddenCode, isWinner } }) => {
  const [newGameModal, setNewGameModal] = useModal(false);
  return (
    <div className="p-8 text-center">
      <div className="text-4xl mb-8">{`You ${
        isWinner ? "Won" : "Lose"
      }!!!`}</div>
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
      <div className="text px-4 py-2 border rounded border-black cursor-pointer hover:text-white hover:bg-blue-400">
        New Game
      </div>
      <Modal isOpen={newGameModal} onClose={setNewGameModal}>
        <NewGame />
      </Modal>
    </div>
  );
};

export default Result;
