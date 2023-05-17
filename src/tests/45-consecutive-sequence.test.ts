import { expect, test } from "@jest/globals";
import consecutiveSequence from "../45-consecutive-sequence";

describe("findSubsequence", () => {
  it("returns null when no subsequence sums up to the target", () => {
    expect(consecutiveSequence([1, 2, 3, 6], 10)).toBeNull();
  });

  it("finds a subsequence that sums up to the target", () => {
    expect(consecutiveSequence([1, 2, 3, 4], 5)).toEqual([2, 3]);
  });

  it("finds the first subsequence that sums up to the target", () => {
    expect(consecutiveSequence([1, 2, 3, 1, 2], 6)).toEqual([1, 2, 3]);
  });

  it("finds a subsequence of length 1 that sums up to the target", () => {
    expect(consecutiveSequence([1, 2, 3, 4], 4)).toEqual([4]);
  });

  it("finds a subsequence that starts at the beginning of the sequence", () => {
    expect(consecutiveSequence([1, 2, 3, 4], 6)).toEqual([1, 2, 3]);
  });

  it("finds a subsequence that ends at the end of the sequence", () => {
    expect(consecutiveSequence([1, 2, 3, 4], 7)).toEqual([3, 4]);
  });
});
