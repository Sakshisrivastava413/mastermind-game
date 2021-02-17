import React from "react";

const Row = ({ colors, getCell, row, status, activeRow = false }) => {
  return (
    <>
      <div className="absolute inset-0 left-3 inset-y-2.5">
        <div className="flex space-x-4">
          {colors.map((color, col) => (
            <div
              key={col}
              className={`border border-black rounded-full h-9 w-9 ${activeRow ? 'cursor-pointer' : ''}`}
              style={{ background: color }}
              onClick={() => getCell({ row, col })}
            ></div>
          ))}
        </div>
      </div>
      <div className="absolute right-3">
        <div className="w-10 flex flex-wrap">
          {status.map((cell, col) => (
            <div
              key={col}
              className="m-1 border border-black rounded-full h-3 w-3"
              style={{ background: cell.color }}
            >
              {
                cell.color == '#fff' && cell.validate && <img className="m-auto h-2" src="cancel.svg" />
              }
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
