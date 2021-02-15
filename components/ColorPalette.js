import React, { useState } from "react";
import { colors } from "../colors.constant";

const ColorPalette = ({ selectedColor }) => {
  const [picked, setPicked] = useState("");
  const setPickedColor = (color) => {
    setPicked(color);
    selectedColor(color);
  };

  return (
    <div>
      {colors.map((color, colNo) => (
        <div
          key={colNo}
          className={`h-10 w-10 rounded-full border ${
            picked == color ? "border-black" : ""
          }`}
          style={{ background: `${color}` }}
          onClick={() => setPickedColor(color)}
        ></div>
      ))}
    </div>
  );
};

export default ColorPalette;
