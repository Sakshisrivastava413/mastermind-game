import { random, isEqual } from "lodash";
import availableColors from "./colors.constant";
import { COL_SIZE, ROW_SIZE } from "./constants";

const createRow = (cols, value) =>
  Array(cols)
    .fill(0)
    .map(() => value);

const createGrid = (rows, cols, value) =>
  Array(rows)
    .fill(0)
    .map(() => createRow(cols, value));

const generateHiddenCode = () => {
  const hiddenCode = [];
  while (hiddenCode.length !== COL_SIZE) {
    const color = availableColors[random(0, availableColors.length - 1)];
    if (hiddenCode.indexOf(color) === -1) {
      hiddenCode.push(color);
    }
  }
  return hiddenCode;
};

const isGameOver = (curRowState, hiddenCode, currentRow) => {
  return isEqual(hiddenCode, curRowState) || currentRow + 1 === ROW_SIZE;
};

const getRowStatus = (curRowState, hiddenCode) => {
  let colorAndPositionMatchCount = 0;
  let onlyColorMatchCount = 0;
  const colorFreq = new Map();

  curRowState.forEach((color, col) => {
    const hiddenCodeColor = hiddenCode[col];
    if (hiddenCodeColor === color) colorAndPositionMatchCount++;
    else
      colorFreq.set(
        hiddenCodeColor,
        colorFreq.has(hiddenCodeColor) ? colorFreq.get(hiddenCodeColor) + 1 : 1
      );
  });

  curRowState.forEach((color, col) => {
    if (
      colorFreq.has(color) &&
      colorFreq.get(color) > 0 &&
      color != hiddenCode[col]
    ) {
      colorFreq.set(color, colorFreq.get(color) - 1);
      onlyColorMatchCount++;
    }
  });
  return [colorAndPositionMatchCount, onlyColorMatchCount];
};

export {
  createRow,
  createGrid,
  generateHiddenCode,
  isGameOver,
  getRowStatus,
};
