import { expect, test } from "@jest/globals";
import SparseMatrix from "../18-optimize-sparse-matrix";

describe("storeMatrix", () => {
  const matrix = [
    [0, 3, 0],
    [0, 0, 1],
    [9, 0, 0],
  ];
  const newMatrix = new SparseMatrix(matrix);

  test("Matrix should be able to access the the values on the same position as the original matrix", () => {
    expect(newMatrix.get(0, 1)).toBe(3);
    expect(newMatrix.get(1, 2)).toBe(1);
    expect(newMatrix.get(2, 0)).toBe(9);
  });

  test("Matrix should be able to access the the zeros", () => {
    expect(newMatrix.get(0, 0)).toBe(0);
    expect(newMatrix.get(1, 1)).toBe(0);
    expect(newMatrix.get(2, 1)).toBe(0);
  });

  test("Optimized matrix should get the same rows of the original matrix", () => {
    expect(newMatrix.getRow(0)).toEqual([0, 3, 0]);
    expect(newMatrix.getRow(1)).toEqual([0, 0, 1]);
    expect(newMatrix.getRow(2)).toEqual([9, 0, 0]);
  });

  test("Optimized matrix should get the same columns of the original matrix", () => {
    expect(newMatrix.getColumn(0)).toEqual([0, 0, 9]);
    expect(newMatrix.getColumn(1)).toEqual([3, 0, 0]);
    expect(newMatrix.getColumn(2)).toEqual([0, 1, 0]);
  });
});
