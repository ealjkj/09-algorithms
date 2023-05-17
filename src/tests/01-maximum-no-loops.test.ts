import max from "../01-maximum-no-loops";
import { expect, test } from "@jest/globals";

test("Find the max of a simple array", () => {
  expect(max([1, 2, 3, 4, 5, 4, 3, 2, 1])).toBe(5);
});

test("Find the max of an array with the maximum at the begining", () => {
  expect(max([8, 6, 7, 2, 6, 1])).toBe(8);
});

test("Find the max of an array with the maximum at the end", () => {
  expect(max([8, 6, 7, 2, 6, 1, 10])).toBe(10);
});

test("Find the max of an array with negative numbers", () => {
  expect(max([3, 6, 7, -2, 6, 1, -10])).toBe(7);
});

test("Find the max of an array with a variety of numbers", () => {
  expect(max([20, 4, 1, 2, -9, 80, 10, 2, 3, 4, 18])).toBe(80);
});
