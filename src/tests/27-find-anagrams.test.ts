import { expect, test } from "@jest/globals";
import findAnagrams from "../27-find-anagrams";

describe("findAnagrams", () => {
  test("should return an empty array if the text is empty", () => {
    expect(findAnagrams("", "hello")).toEqual([]);
  });

  test("should return an empty array if the string is empty", () => {
    expect(findAnagrams("world", "")).toEqual([]);
  });

  test("should return an empty array if no anagrams are found", () => {
    expect(findAnagrams("hello world", "goodbye")).toEqual([]);
  });

  test("should return an array of anagrams", () => {
    expect(findAnagrams("abc cab bac xyz cba", "abc")).toEqual([
      "abc",
      "cab",
      "bac",
      "cba",
    ]);
    expect(findAnagrams("care acre acer dog car race", "race")).toEqual([
      "care",
      "acre",
      "acer",
      "race",
    ]);
  });
});
