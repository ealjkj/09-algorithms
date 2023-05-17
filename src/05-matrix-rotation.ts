type matrix = number[][];

export default function rotateMatrix(matrix: matrix): matrix {
  const half = Math.ceil(matrix.length / 2);
  for (let layer = 0; layer < half; layer++) {
    rotateLayer(matrix, layer);
  }
  return matrix;
}

function rotateLayer(matrix: matrix, layer: number): matrix {
  const layerLength = matrix.length - 2 * layer;
  const half = Math.ceil(layerLength / 2);

  for (let j = layer; j < layer + layerLength - 1; j++) {
    const indexes: [number, number][] = [
      [layer, j],
      [matrix.length - j - 1, layer],
      [matrix.length - 1 - layer, matrix.length - j - 1],
      [j, matrix.length - 1 - layer],
    ];

    rotateElements(matrix, indexes);
  }

  return matrix;
}

function rotateElements(matrix: matrix, indexes: [number, number][]): matrix {
  // Save the last element before it becomes overwritten
  const [i_n, j_n] = indexes[indexes.length - 1];
  const last = matrix[i_n][j_n];

  for (let k = indexes.length - 2; k >= 0; k--) {
    const [i_k, j_k] = indexes[k];
    const [i_kp1, j_kp1] = indexes[k + 1];

    matrix[i_kp1][j_kp1] = matrix[i_k][j_k];
  }

  const [i1, j1] = indexes[0];
  matrix[i1][j1] = last;

  return matrix;
}
