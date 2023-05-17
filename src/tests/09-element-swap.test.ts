import { expect, test } from "@jest/globals";
import swapElements from "../09-element-swap";

test("Swap elements from the 'identity' array", () => {
  expect(swapElements([0, 1, 2, 3, 4, 5, 6])).toEqual([0, 1, 2, 3, 4, 5, 6]);
});

test("Swap elements from the reversed 'identity' array", () => {
  expect(swapElements([6, 5, 4, 3, 2, 1, 0])).toEqual([0, 1, 2, 3, 4, 5, 6]);
});

test("Swap elements from a non ordered array wiwdth even elements", () => {
  expect(swapElements([3, 2, 0, 1])).toEqual([1, 0, 3, 2]);
});

test("Swap elements from a non ordered array with odd elements", () => {
  expect(swapElements([4, 0, 2, 1, 3])).toEqual([3, 4, 2, 0, 1]);
});
