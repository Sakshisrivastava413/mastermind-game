import React from "react";

const Instructions = () => (
  <div className="p-8">
    <div className="text-2xl mb-4 text-center">Instructions</div>
    <div>
      <span className="font-semibold">Goal:</span> Try to guess the pattern, in
      both order and color, within ten turns.
      <div className="mb-2"></div>
      <span className="font-semibold">Steps:</span>
      1. Fill the circles with colors available.
      <br />
      2. When a row gets filled, click on check mark to validate.
      <br />
      <div className="mb-2"></div>
      <span className="font-semibold">Observation:</span> After submitting a
      row, you can see the status of your guessed code in the small circles
      within that row.
      <br />
      - Black means that their is a cell value which is correct in both color
      and position.
      <br />
      - Black means that their is a cell value which is corrent in color but
      placed in wrong position. <br />
      - Cross means wrong color and position choice. <br />
      <div className="mb-4"></div>
      <div className="italic">
        <span className="font-semibold">Note:</span> Hints are not in order. It
        is generated randomly.
      </div>
    </div>
  </div>
);

export default Instructions;
