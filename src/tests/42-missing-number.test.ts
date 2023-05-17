import { expect, test } from "@jest/globals";
import missingNumber from "../42-missing-number";

describe("findMissingNumber", () => {
  it("returns the missing number from a set of size N-1", () => {
    expect(missingNumber([1, 2, 4, 5])).toBe(3);
    expect(missingNumber([2, 3, 4, 5, 6, 7, 8])).toBe(1);
    expect(missingNumber([1, 3, 4, 5, 6])).toBe(2);
  });

  it("returns the missing number from a set of size N-1 (unsorted array)", () => {
    expect(missingNumber([2, 4, 5, 1])).toBe(3);
    expect(missingNumber([8, 3, 7, 2, 6, 5, 4])).toBe(1);
    expect(missingNumber([6, 1, 5, 4, 3])).toBe(2);
  });
});
