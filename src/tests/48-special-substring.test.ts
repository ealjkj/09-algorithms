import { expect, test } from "@jest/globals";
import specialSubstring from "../48-special-substring";

describe("findSmallestSubstring", () => {
  it("returns null string when S is shorter than T", () => {
    expect(specialSubstring("", "abc")).toBeNull();
    expect(specialSubstring("abc", "abcd")).toBeNull();
    expect(specialSubstring("", "a")).toBeNull();
  });

  it("returns the full string when T is equal to S", () => {
    expect(specialSubstring("abc", "abc")).toEqual("abc");
  });

  it("returns undefined when T contains characters not in S", () => {
    expect(specialSubstring("abc", "def")).toBeNull();
  });

  it("returns the smallest substring that contains all characters in T", () => {
    expect(specialSubstring("abcdefghi", "bdh")).toEqual("bcdefgh");
    expect(specialSubstring("abccdefghccc", "cf")).toEqual("fghc");
    expect(specialSubstring("abcdxyefgzw", "zyx")).toEqual("xyefgz");
    expect(specialSubstring("abcdxyefgzw", "wzy")).toEqual("yefgzw");
    expect(specialSubstring("abcdefg", "aceg")).toEqual("abcdefg");
  });
});
