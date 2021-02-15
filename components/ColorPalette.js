import React, { useState } from "react";
import { colors } from "../colors.constant";

const ColorPalette = ({ selectedColor }) => {
  const [picked, setPicked] = useState("");
  const setPickedColor = (color) => {
    setPicked(color);
    selectedColor(color);
  };

  return (
    <>
      <div className="text-xl px-4 pt-4">Pick any color:</div>
      <div className="flex flex-wrap justify-center p-4">
        {colors.map((color, colNo) => (
          <div
            key={colNo}
            className={`h-10 w-10 rounded-full border-2 m-2 ${
              picked == color ? "border-black" : ""
            }`}
            style={{ background: `${color}` }}
            onClick={() => setPickedColor(color)}
          ></div>
        ))}
      </div>
    </>
  );
};

export default ColorPalette;
