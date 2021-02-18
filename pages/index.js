import Head from "next/head";
import { useState } from "react";
import Game from "../components/Game";
import ColorPalette from "../components/ColorPalette";
import Header from "../components/Header";
import Modal from "../components/Modal";
import useModal from "../hooks/useModal";
import Instructions from "../components/Instructions";
import Result from "../components/Result";
import NewGame from "../components/NewGame";

const Home = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [newGameModal, setNewGameModal] = useModal(false);
  const [instructionModal, setInstructionModal] = useModal(false);
  const [resultModal, setResultModal] = useModal(false);

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
                <NewGame />
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

          <div className="w-full p-4">
            <div className="border border-black bg-white p-4">
              <Game selectedColor={selectedColor} result={setResultModal} />
            </div>
          </div>
          <Modal isOpen={resultModal} onClose={setResultModal}>
            <Result />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Home;
