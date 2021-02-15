import React from "react";

const Row = ({ colors, getCell, row, status }) => {
  return (
    <>
      <div className="absolute inset-0 left-3 top-2">
        <div className="flex space-x-4">
          {colors.map((color, col) => (
            <div
              key={col}
              className="border border-black rounded-full h-10 w-10"
              style={{ background: color }}
              onClick={() => getCell({ row, col })}
            ></div>
          ))}
        </div>
      </div>
      <div className="absolute right-3">
        <div className="w-10 flex flex-wrap">
          {status.map((color) => (
            <div
              className="m-px border border-black rounded-full h-4 w-4"
              style={{ background: color }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
