import { expect, test } from "@jest/globals";
import isInterleaved from "../50-interleaved-combinations";

describe("isInterleaved", () => {
  it("returns false when C has a different length than A and B combined", () => {
    expect(isInterleaved("abc", "def", "abcdefg")).toBe(false);
    expect(isInterleaved("abc", "def", "ab")).toBe(false);
    expect(isInterleaved("abc", "def", "ghijkl")).toBe(false);
  });

  it("returns true when C can be formed by interleaving the characters of A and B", () => {
    expect(isInterleaved("abc", "def", "adbecf")).toBe(true);
    expect(isInterleaved("abcd", "abcd", "aabcbcdd")).toBe(true);
    expect(isInterleaved("abc", "", "abc")).toBe(true);
    expect(isInterleaved("", "abc", "abc")).toBe(true);
  });

  it("returns false when C cannot be formed by interleaving the characters of A and B", () => {
    expect(isInterleaved("abc", "def", "afdebc")).toBe(false);
    expect(isInterleaved("abcd", "abcd", "acbcbdc")).toBe(false);
    expect(isInterleaved("", "abc", "abcd")).toBe(false);
  });
});
