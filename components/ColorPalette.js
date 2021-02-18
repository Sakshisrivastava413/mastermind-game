import React from "react";
import colors from "../colors.constant";

const ColorPalette = ({ selectedColor, onColorSelected }) => (
  <>
    <div className="text-xl px-4 pt-4 text-center">Color choices</div>
    <div className="flex flex-wrap justify-center p-4">
      {colors.map((color, colNo) => (
        <div
          key={colNo}
          className={`h-10 w-10 rounded-full border-2 m-2 cursor-pointer ${
            selectedColor === color ? "border-black" : ""
          }`}
          style={{ background: `${color}` }}
          onClick={() => onColorSelected(color)}
        ></div>
      ))}
    </div>
  </>
);

export default ColorPalette;
