import { expect, test } from "@jest/globals";
import secondLargest from "../39-second-largest-number";

describe("findSecondLargest", () => {
  test("returns null when input array has less than 2 elements", () => {
    expect(secondLargest([1])).toBeNull();
    expect(secondLargest([])).toBeNull();
  });

  test("returns the second largest number in an array", () => {
    expect(secondLargest([1, 2])).toBe(1);
    expect(secondLargest([1, 3, 2])).toBe(2);
    expect(secondLargest([5, 3, 9, 1, 8])).toBe(8);
    expect(secondLargest([7, 7, 7, 7, 7])).toBe(7);
    expect(secondLargest([-1, -2, -3])).toBe(-2);
  });
});
