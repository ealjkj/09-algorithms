type matrix = number[][];

export default function zeroRowsAndColums(matrix: matrix): matrix {
  let firstColumZero = false;
  let firstRowZero = false;

  // Find the rows and columns that will become zero
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;

        firstColumZero = j === 0 || firstColumZero;
        firstRowZero = i === 0 || firstRowZero;
      }
    }
  }

  // change columns
  for (let j = 1; j < matrix[0].length; j++) {
    if (matrix[0][j] === 0) {
      columnToZero(matrix, j);
    }
  }

  // change rows
  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      rowToZero(matrix, i);
    }
  }

  // change first column and row if needed
  if (firstColumZero) columnToZero(matrix, 0);
  if (firstRowZero) rowToZero(matrix, 0);

  return matrix;
}

function columnToZero(matrix: matrix, column: number): matrix {
  for (let i = 1; i < matrix.length; i++) {
    matrix[i][column] = 0;
  }
  return matrix;
}

function rowToZero(matrix: matrix, row: number): matrix {
  for (let j = 1; j < matrix[0].length; j++) {
    matrix[row][j] = 0;
  }
  return matrix;
}

const input = [
  [1, 0, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 11, 0],
];

const answer = [
  [0, 0, 0, 0],
  [5, 0, 7, 0],
  [0, 0, 0, 0],
];

console.table(input);
zeroRowsAndColums(input);
console.table(input);
console.table(answer);
