import { expect, test } from "@jest/globals";
import search from "../15-2d-binary-search";
describe("search", () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  it("should return the correct indexes for a value that exists in the matrix", () => {
    expect(search(matrix, 5)).toEqual([1, 1]);
    expect(search(matrix, 1)).toEqual([0, 0]);
    expect(search(matrix, 9)).toEqual([2, 2]);
  });

  it("should return null for a value that does not exist in the matrix", () => {
    expect(search(matrix, 10)).toBeNull();
    expect(search(matrix, 0)).toBeNull();
    expect(search(matrix, -1)).toBeNull();
  });

  it("should handle a 1x1 matrix", () => {
    expect(search([[5]], 5)).toEqual([0, 0]);
    expect(search([[5]], 10)).toBeNull();
  });

  it("should handle a matrix with multiple rows and a single column", () => {
    const matrix = [[1], [2], [3]];
    expect(search(matrix, 2)).toEqual([1, 0]);
    expect(search(matrix, 4)).toBeNull();
  });
});
