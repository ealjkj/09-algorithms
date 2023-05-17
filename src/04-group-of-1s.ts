type matrix = number[][];

export default function groupOfOnes(matrix: matrix): number[] {
  const visited: matrix = zeroMatrix(matrix.length, matrix[0].length);
  const islands: number[] = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let counter = 0;
      if (visited[i][j] === 1 || matrix[i][j] === 0) {
        continue;
      }
      traverseIsland(matrix, visited, [i, j], () => {
        counter++;
      });

      islands.push(counter);
    }
  }
  return islands;
}

function traverseIsland(
  matrix: matrix,
  visited: matrix,
  startPosition: [number, number],
  cb: () => void
): void {
  const [i, j] = startPosition;
  if (matrix[i][j] !== 1) {
    return;
  }
  if (visited[i][j] == 1) {
    return;
  }

  visited[i][j] = 1;
  cb();

  const upPos = [i - 1, j] as [number, number];
  const downPos = [i + 1, j] as [number, number];
  const leftPos = [i, j - 1] as [number, number];
  const rightPos = [i, j + 1] as [number, number];

  [upPos, downPos, leftPos, rightPos].forEach((position) => {
    if (isValidPosition(matrix, position)) {
      traverseIsland(matrix, visited, position, cb);
    }
  });
}

function isValidPosition(matrix: matrix, position: [number, number]): Boolean {
  const [i, j] = position;
  const validI = 0 <= i && i < matrix.length;
  const validJ = 0 <= j && j < matrix[0].length;

  return validI && validJ;
}

function zeroMatrix(rows: number, columns: number): matrix {
  let matrix: matrix = [];

  for (let i = 0; i < rows; i++) {
    matrix[i] = []; // create an empty row
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = 0; // fill the row with 0s
    }
  }
  return matrix;
}
