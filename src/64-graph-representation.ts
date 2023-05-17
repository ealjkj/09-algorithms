// This is how the figure shows the graph
export const graph = {
  1: [2, 3],
  2: [3, 5],
  3: [5],
  4: [5, 6],
  5: [6],
  6: [],
};

const listOfNodes = [[1, 2], [2, 3, 4], [4], [4, 5], [5], []];

const adjacentMatrix = [
  [0, 1, 1, 0, 0, 0], // 0
  [0, 0, 1, 1, 1, 0], // 1
  [0, 0, 0, 0, 1, 0], // 2
  [0, 0, 0, 0, 1, 1], // 3
  [0, 0, 0, 0, 0, 1], // 4
  [0, 0, 0, 0, 0, 0], // 5
];
