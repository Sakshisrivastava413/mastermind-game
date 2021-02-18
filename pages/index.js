import Head from "next/head";
import { useState, useRef } from "react";
import Game from "../components/Game";
import ColorPalette from "../components/ColorPalette";
import Header from "../components/Header";
import Modal from "../components/Modal";
import useModal from "../hooks/useModal";
import Instructions from "../components/Instructions";
import NewGame from "../components/NewGame";
import colors from "../colors.constant";

const Home = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [newGameModal, setNewGameModal] = useModal(false);
  const [instructionModal, setInstructionModal] = useModal(false);
  const gameRef = useRef();
  return (
    <div>
      <Head>
        <title>Mastermind Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div
        className="bg-blue-200 flex justify-center pt-5"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        <div className="bg-blue-200 flex flex-wrap justify-center">
          <div className="p-4 pr-0 w-72 space-y-2">
            <div className="bg-white border border-black">
              <ColorPalette
                selectedColor={selectedColor}
                onColorSelected={setSelectedColor}
              />
            </div>
            <div className="bg-white border border-black space-y-4 p-4 text-center">
              <div
                onClick={setNewGameModal}
                className="text px-4 py-2 border rounded border-black cursor-pointer hover:text-white hover:bg-blue-400"
              >
                New Game
              </div>
              <Modal isOpen={newGameModal} onClose={setNewGameModal}>
                <NewGame
                  closeModal={setNewGameModal}
                  resetGame={() => {
                    gameRef.current.openNewGame(), setNewGameModal();
                  }}
                />
              </Modal>
              <div
                onClick={setInstructionModal}
                className="text px-4 py-2 border rounded border-black cursor-pointer hover:text-white hover:bg-blue-400"
              >
                Instructions
              </div>
              <Modal isOpen={instructionModal} onClose={setInstructionModal}>
                <Instructions />
              </Modal>
            </div>
          </div>

          <div className="w-112 p-4">
            <div className="border border-black bg-white p-4">
              <Game selectedColor={selectedColor} ref={gameRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
