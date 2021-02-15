import React from "react";

const Row = ({ colors,  getCell, row }) => {
  return (
    <>
      <div className="absolute inset-0 left-3 top-2">
        <div className="flex space-x-4">
          {colors.map((color, col) => (
              <div
                key={col}
                className="border border-black rounded-full h-10 w-10"
                style={{ background: color }}
                onClick={() => getCell({row, col})}
              ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
