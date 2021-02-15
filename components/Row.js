import React from "react";

const SingleRow = ({ colors }) => {
  return (
    <>
      <div className="absolute inset-0 left-3 top-2">
        <div className="flex space-x-4">
          {colors.map((color) => (
            <>
              <div
                className="border border-black rounded-full h-10 w-10"
                style={{ background: color }}
              ></div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleRow;
