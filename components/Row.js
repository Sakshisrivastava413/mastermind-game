import React from "react";
import { INITIAL_CELL_VALUE } from "../constants";

const Row = ({
  colors,
  onCellClick,
  row,
  status,
  activeRow,
  isRowValidate,
  validateRow,
}) => (
  <>
    <div className="flex mx-0 lg:mx-4">
      <div className="flex space-x-4 w-3/4">
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
      <div className="w-1/4 flex justify-center items-center">
        {activeRow === row && isRowValidate && (
          <img
            onClick={validateRow}
            src="check.svg"
            className="h-6 cursor-pointer"
          />
        )}
      </div>
      <div className="w-1/4 flex flex-row-reverse">
        <div className="w-10 flex flex-wrap">
          {status.map((color, col) => (
            <div
              key={col}
              className="m-1 border border-black rounded-full h-3 w-3"
              style={{ background: color }}
            >
              {color === INITIAL_CELL_VALUE && row < activeRow && (
                <img className="m-auto h-2 mt-px p-px" src="cancel.svg" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Row;
