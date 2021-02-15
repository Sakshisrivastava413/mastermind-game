import React from "react";

const Row = ({ colors, getCell, row, status }) => {
  return (
    <>
      <div className="absolute inset-0 left-3 inset-y-2.5">
        <div className="flex space-x-4">
          {colors.map((color, col) => (
            <div
              key={col}
              className="border border-black rounded-full h-9 w-9"
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
              className="m-1 border border-black rounded-full h-3 w-3"
              style={{ background: color }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
