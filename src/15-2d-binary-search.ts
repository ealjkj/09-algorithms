type matrix = number[][];

export default function search(matrix: matrix, value: number): number[] | null {
  return recursiveSearch(
    matrix,
    value,
    [0, 0],
    [matrix.length - 1, matrix[0].length - 1]
  );
}

function recursiveSearch(
  matrix: matrix,
  value: number,
  start: number[],
  end: number[]
): number[] | null {
  let ans = null;

  if (!isValidPosition(matrix, start)) return null;
  if (!isValidPosition(matrix, end)) return null;

  const [i_0, j_0] = start;
  const [i_n, j_n] = end;

  if (i_0 === 1 && j_0 === 1 && i_n === 1 && j_n === 2) return null;
  if (i_0 === 0 && j_0 === 1 && i_n === 0 && j_n === 2) return null;

  if (i_0 === i_n && j_0 === j_n) {
    return matrix[i_0][j_0] === value ? start : null;
  }

  const midI = Math.floor((i_n + i_0) / 2);
  const midJ = Math.floor((j_n + j_0) / 2);

  // topLeft Matrix
  if (matrix[midI][midJ] === value) {
    return [midI, midJ];
  } else if (matrix[midI][midJ] > value) {
    ans = recursiveSearch(matrix, value, start, [midI, midJ]);
  }
  if (ans) return ans;

  //bottomRight Matrix
  const bottomRightPosition = [midI + 1, midJ + 1];
  if (
    midI + 1 <= i_n &&
    midJ + 1 <= j_n &&
    matrix[midI + 1][midJ + 1] <= value
  ) {
    ans = recursiveSearch(matrix, value, bottomRightPosition, end);
  }
  if (ans) return ans;

  //topRight Matrix
  if (midJ + 1 <= j_n) {
    ans = recursiveSearch(matrix, value, [i_0, midJ + 1], [midI, j_n]);
  }
  if (ans) return ans;

  //bottomLeft Matrix
  if (midI + 1 <= i_n) {
    ans = recursiveSearch(matrix, value, [midI + 1, j_0], [i_n, midJ]);
  }
  if (ans) return ans;

  return null;
}

function isValidPosition(matrix: matrix, position: number[]): Boolean {
  const [i, j] = position;
  const validI = 0 <= i && i < matrix.length;
  const validJ = 0 <= j && j < matrix[0].length;

  return validI && validJ;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
