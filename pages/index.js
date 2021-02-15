import Head from "next/head";
import Game from "../components/Game";
import ColorPalette from "../components/ColorPalette";
import { useState } from "react";

export default function Home() {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div>
      <Head>
        <title>Mastermind Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex m-10">
        <div className="w-1/3">
          <ColorPalette
            selectedColor={(color) => {
              setSelectedColor(color);
            }}
          />
        </div>
        <div className="border border-black h-auto w-1/3 p-4 space-y-2">
          <Game color={selectedColor} />
        </div>
      </div>
    </div>
  );
}
