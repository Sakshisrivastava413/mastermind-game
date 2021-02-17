import Head from "next/head";
import Game from "../components/Game";
import ColorPalette from "../components/ColorPalette";
import { useState } from "react";
import Header from "../components/Header";
import Modal from "../components/Modal";

const NewGame = () => {
  return (
    <div className="p-8 font-mono text-center">
      <div className="text-2xl">New Game</div>
      <div>No of rows: </div>
      <div>No of cols: </div>
      <div>Duplicates: </div>
    </div>
  );
};

const Instructions = () => {
  return (
    <div className="p-8 font-mono">
      <div className="text-2xl mb-4 text-center">Instructions</div>
      <div>
        Try to guess the pattern, in both order and color, within ten turns.
        After submitting a row, a small black peg is placed for each code peg
        from the guess which is correct in both color and position. A white peg
        indicates the existence of a correct color code peg placed in the wrong
        position.
      </div>
    </div>
  );
};

const Home = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [newGameModal, toggleNewGameModal] = useState(false);
  const [instructionModal, toggleInstructionModal] = useState(false);

  return (
    <div>
      <Head>
        <title>Mastermind Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="bg-blue-200 flex justify-center">
        <div className="bg-blue-200 w-2/4 flex">
          <div className="p-4 w-96 pr-0 space-y-2">
            <div className="bg-white border border-black">
              <ColorPalette
                selectedColor={(color) => {
                  setSelectedColor(color);
                }}
              />
            </div>
            <div className="bg-white border border-black space-y-4 p-4 text-center">
              <div
                onClick={() => toggleNewGameModal(true)}
                className="text font-mono px-4 py-2 border rounded border-black cursor-pointer hover:text-white hover:bg-blue-400"
              >
                New Game
              </div>
              <Modal
                status={newGameModal}
                info={NewGame}
                handleClose={() => toggleNewGameModal(false)}
              ></Modal>
              <div
                onClick={() => toggleInstructionModal(true)}
                className="text font-mono px-4 py-2 border rounded border-black cursor-pointer hover:text-white hover:bg-blue-400"
              >
                Instructions
              </div>
              <Modal
                status={instructionModal}
                info={Instructions}
                handleClose={() => toggleInstructionModal(false)}
              ></Modal>
            </div>
          </div>

          <div className="w-full p-4">
            <div className="border border-black bg-white p-4">
              <Game pickedColor={selectedColor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
