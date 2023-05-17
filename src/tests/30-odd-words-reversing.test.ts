import { expect, test } from "@jest/globals";
import { reverseOddWords } from "../30-odd-words-reversing";

describe("reverseOddWords", () => {
  test("returns empty string when input is empty", () => {
    expect(reverseOddWords("")).toBe("");
  });

  test("returns the input when it has only one word", () => {
    expect(reverseOddWords("hello")).toBe("hello");
  });

  test("reverses odd words and leaves even words unchanged", () => {
    expect(reverseOddWords("the quick brown fox")).toBe("the kciuq brown xof");
  });

  test("reverses odd words in a string with only odd-length words", () => {
    expect(reverseOddWords("this is a test")).toBe("this si a tset");
  });
});
