import { expect, test } from "@jest/globals";
import levenshteinDistance from "../26-levenshtein-distance";

describe("levenshteinDistance", () => {
  test("should return 0 for equal strings", () => {
    expect(levenshteinDistance("hello", "hello")).toBe(0);
  });

  test("should return the length of the string when comparing with empty string", () => {
    expect(levenshteinDistance("hello", "")).toBe(5);
    expect(levenshteinDistance("", "world")).toBe(5);
  });

  test("should return the correct distance for different strings", () => {
    expect(levenshteinDistance("kitten", "sitting")).toBe(3);
    expect(levenshteinDistance("book", "back")).toBe(2);
    expect(levenshteinDistance("car", "race")).toBe(3);
    expect(levenshteinDistance("ab", "ba")).toBe(2);
    expect(levenshteinDistance("abc", "def")).toBe(3);
  });
});
