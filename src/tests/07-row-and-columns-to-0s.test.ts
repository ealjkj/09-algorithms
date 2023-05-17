import { expect, test } from "@jest/globals";
import zeroRowsAndColums from "../07-row-and-columns-to-0s";
test("Zero element is at the middle of a 3x3 matrix", () => {
  const input = [
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 9],
  ];

  const answer = [
    [1, 0, 3],
    [0, 0, 0],
    [7, 0, 9],
  ];

  expect(zeroRowsAndColums(input)).toStrictEqual(answer);
});

test("Matrix has multiple zeros in the same column", () => {
  const input = [
    [1, 0, 3],
    [4, 0, 6],
    [7, 8, 9],
  ];

  const answer = [
    [0, 0, 0],
    [0, 0, 0],
    [7, 0, 9],
  ];

  expect(zeroRowsAndColums(input)).toStrictEqual(answer);
});

test("Matrix has multiple zeros in the same row", () => {
  const input = [
    [1, 2, 3],
    [4, 0, 0],
    [7, 8, 9],
  ];

  const answer = [
    [1, 0, 0],
    [0, 0, 0],
    [7, 0, 0],
  ];

  expect(zeroRowsAndColums(input)).toStrictEqual(answer);
});

test("Matrix has zero at the begining", () => {
  const input = [
    [0, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const answer = [
    [0, 0, 0],
    [0, 5, 6],
    [0, 8, 9],
  ];

  expect(zeroRowsAndColums(input)).toStrictEqual(answer);
});

test("Matrix has zero at the end", () => {
  const input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0],
  ];

  const answer = [
    [1, 2, 0],
    [4, 5, 0],
    [0, 0, 0],
  ];

  expect(zeroRowsAndColums(input)).toStrictEqual(answer);
});

test("Matrix has no zeros at the end", () => {
  const input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const answer = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  expect(zeroRowsAndColums(input)).toStrictEqual(answer);
});

test("Matrix is not a square", () => {
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

  expect(zeroRowsAndColums(input)).toStrictEqual(answer);
});
