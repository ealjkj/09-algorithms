import { expect, test } from "@jest/globals";
import rotateMatrix from "../05-matrix-rotation";
test("Rotate a  (3x3) matrix", () => {
  const input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const answer = [
    [3, 6, 9],
    [2, 5, 8],
    [1, 4, 7],
  ];

  expect(rotateMatrix(input)).toStrictEqual(answer);
});

test("Rotate a big (5x5) matrix", () => {
  const input = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ];

  const answer = [
    [5, 10, 15, 20, 25],
    [4, 9, 14, 19, 24],
    [3, 8, 13, 18, 23],
    [2, 7, 12, 17, 22],
    [1, 6, 11, 16, 21],
  ];

  expect(rotateMatrix(input)).toStrictEqual(answer);
});

test("Rotate a  (1x1) matrix", () => {
  const input = [[7]];
  const answer = [[7]];

  expect(rotateMatrix(input)).toStrictEqual(answer);
});
