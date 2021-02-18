import React from "react";

const Instructions = () => (
  <div className="p-8">
    <div className="text-2xl mb-4 text-center">Instructions</div>
    <div>
      Try to guess the pattern, in both order and color, within ten turns. After
      submitting a row, a small black peg is placed for each code peg from the
      guess which is correct in both color and position. A white peg indicates
      the existence of a correct color code peg placed in the wrong position.
    </div>
  </div>
);

export default Instructions;
