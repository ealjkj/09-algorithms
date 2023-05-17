import { expect, test } from "@jest/globals";
import isStringPermutation from "../29-detect-string-permutation";

describe("stringPermutation", () => {
  test("should return true for identical strings", () => {
    expect(isStringPermutation("hello", "hello")).toBe(true);
  });

  test("should return false for strings of different lengths", () => {
    expect(isStringPermutation("hello", "worlds")).toBe(false);
  });

  test("should return true for string permutations", () => {
    expect(isStringPermutation("abc", "cab")).toBe(true);
    expect(isStringPermutation("abcd", "dcba")).toBe(true);
    expect(isStringPermutation("1234", "2134")).toBe(true);
  });

  test("should return false for non-permutations", () => {
    expect(isStringPermutation("hello", "lelod")).toBe(false);
    expect(isStringPermutation("abcde", "fdcba")).toBe(false);
    expect(isStringPermutation("12345", "5a321")).toBe(false);
  });
});
