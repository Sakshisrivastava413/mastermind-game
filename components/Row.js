import React from "react";
import { INITIAL_CELL_VALUE } from "../constants";

const Row = ({ colors, onCellClick, row, status, activeRow }) => (
  <>
    <div className="absolute inset-0 left-3 inset-y-2.5">
      <div className="flex space-x-4">
        {colors.map((color, col) => (
          <div
            key={col}
            className={`border border-black rounded-full h-9 w-9 ${
              activeRow === row ? "cursor-pointer" : ""
            }`}
            style={{ background: color }}
            onClick={() => onCellClick({ row, col })}
          ></div>
        ))}
      </div>
    </div>
    <div className="absolute right-3">
      <div className="w-10 flex flex-wrap">
        {status.map((color, col) => (
          <div
            key={col}
            className="m-1 border border-black rounded-full h-3 w-3"
            style={{ background: color }}
          >
            {color === INITIAL_CELL_VALUE && row < activeRow && (
              <img className="m-auto h-2 mt-px" src="cancel.svg" />
            )}
          </div>
        ))}
      </div>
    </div>
  </>
);

export default Row;
