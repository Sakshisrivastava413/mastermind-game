import Head from "next/head";
import Game from "../components/Game";
import ColorPalette from "../components/ColorPalette";
import { useState } from "react";
import Header from "../components/Header";

export default function Home() {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div>
      <Head>
        <title>Mastermind Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="flex justify-center bg-gray-400">
        <div className="bg-gray-100 w-2/4 flex">
          <div className="p-4 w-96 pr-0">
            <div className="bg-white">
              <ColorPalette
                selectedColor={(color) => {
                  setSelectedColor(color);
                }}
              />
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
}
