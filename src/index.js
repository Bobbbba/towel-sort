module.exports = function towelSort(matrix) {
  const arr = [];
  if (!matrix) {
    return arr;
  }
  let i = 0;
  let j = 0;
  let direction = true;
  while (i < matrix.length) {
    arr.push(matrix[i][j]);

    if ((j === matrix[i].length - 1 && direction) || (!direction && j === 0)) {
      direction = !direction;
      i += 1;
      if (j !== 0 && i < matrix.length) {
        j = matrix[i].length - 1;
      }
    } else if (direction) {
      j += 1;
    } else {
      j -= 1;
    }
  }
  return arr;
};
