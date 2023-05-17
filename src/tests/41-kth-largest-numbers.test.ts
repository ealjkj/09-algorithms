import { expect, test } from "@jest/globals";
import kthLargest from "../41-kth-largest-numbers";

function sortNumbers(arr: number[] | null): number[] | null {
  if (arr === null) return null;
  var sortedArr = arr.slice().sort(function (a, b) {
    return a - b;
  });
  return sortedArr;
}

describe("findSecondLargest", () => {
  test("returns null when input array has less than k elements", () => {
    expect(kthLargest([1], 2)).toBeNull();
    expect(kthLargest([], 4)).toBeNull();
  });

  test("returns the kth largest numbers in an array", () => {
    expect(sortNumbers(kthLargest([1, 2], 2))).toEqual([1, 2]);
    expect(sortNumbers(kthLargest([1, 3, 2], 1))).toEqual([3]);
    expect(sortNumbers(kthLargest([5, 3, 9, 1, 8], 3))).toEqual([5, 8, 9]);
    expect(sortNumbers(kthLargest([7, 7, 7, 7, 7], 5))).toEqual([
      7, 7, 7, 7, 7,
    ]);
    expect(sortNumbers(kthLargest([-1, -2, -3], 2))).toEqual([-2, -1]);
  });
});
