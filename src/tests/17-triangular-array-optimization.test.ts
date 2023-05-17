import { expect, test } from "@jest/globals";
import SymmetricMatrix from "../17-triangular-array-optimization";

describe("Symmetric matrix", () => {
  const matrix = [
    [1, 2, 3],
    [2, 4, 5],
    [3, 5, 9],
  ];

  const newMatrix = new SymmetricMatrix(matrix);

  test("Matrix should be able to access the the values on the bottomLeft triangle", () => {
    expect(newMatrix.get(1, 0)).toBe(matrix[1][0]);
    expect(newMatrix.get(2, 0)).toBe(matrix[2][0]);
    expect(newMatrix.get(2, 1)).toBe(matrix[2][1]);
  });

  test("Matrix should be able to access the topRight triangle", () => {
    expect(newMatrix.get(0, 1)).toBe(matrix[0][1]);
    expect(newMatrix.get(0, 2)).toBe(matrix[0][2]);
    expect(newMatrix.get(1, 2)).toBe(matrix[1][2]);
  });
  test("Matrix should be able to access the diagonalelements", () => {
    expect(newMatrix.get(0, 0)).toBe(matrix[0][0]);
    expect(newMatrix.get(1, 1)).toBe(matrix[1][1]);
    expect(newMatrix.get(2, 2)).toBe(matrix[2][2]);
  });

  test("Optimized matrix should get the same rows of the original matrix", () => {
    expect(newMatrix.getRow(0)).toEqual([1, 2, 3]);
    expect(newMatrix.getRow(1)).toEqual([2, 4, 5]);
    expect(newMatrix.getRow(2)).toEqual([3, 5, 9]);
  });

  test("Optimized matrix should get the same columns of the original matrix", () => {
    expect(newMatrix.getColumn(0)).toEqual([1, 2, 3]);
    expect(newMatrix.getColumn(1)).toEqual([2, 4, 5]);
    expect(newMatrix.getColumn(2)).toEqual([3, 5, 9]);
  });
});
