import { expect, test } from "@jest/globals";
import groupOfOnes from "../04-group-of-1s";

function sortNumbers(arr: number[]) {
  var sortedArr = arr.slice().sort(function (a, b) {
    return a - b;
  });
  return sortedArr;
}

test("should return [1, 1, 1] for a matrix with three islands of size 1", () => {
  const matrix = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];
  expect(groupOfOnes(matrix)).toEqual([1, 1, 1]);
});

test("should return [1, 5] for a matrix with two islands of size 1 and 5", () => {
  const matrix = [
    [1, 1, 0],
    [0, 1, 1],
    [1, 0, 1],
  ];
  expect(sortNumbers(groupOfOnes(matrix))).toEqual([1, 5]);
});

test("should return [3] for a matrix with one island of size 3", () => {
  const matrix = [
    [1, 1, 1],
    [0, 0, 0],
    [0, 0, 0],
  ];
  expect(groupOfOnes(matrix)).toEqual([3]);
});

test("should return [12] for a matrix with one island of size 12", () => {
  const matrix = [
    [1, 1, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
  ];
  expect(groupOfOnes(matrix)).toEqual([12]);
});

test("should return [1, 1, 4] for a matrix with trhee islands of size 1, 1 and 4", () => {
  const matrix = [
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 1],
  ];
  expect(sortNumbers(groupOfOnes(matrix))).toEqual([1, 1, 4]);
});

test("should return [1, 2, 2, 4, 4] for a matrix with 5 islands of size 1, 2, 4, 4", () => {
  const matrix = [
    [1, 1, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 1, 0],
    [1, 1, 0, 0, 1],
  ];
  expect(sortNumbers(groupOfOnes(matrix))).toEqual([1, 2, 2, 4, 4]);
});

test("should return [1, 1, 3, 4, 5, 5, 6] for a matrix with three islands of size 1", () => {
  const matrix = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ];

  const sortedAnswer = [1, 4, 4, 5, 5, 6];
  expect(sortNumbers(groupOfOnes(matrix))).toEqual(sortedAnswer);
});
