import { expect, test } from "@jest/globals";
import lowestLexicographicValue from "../44-unique-characters";

describe("findUniqueString", () => {
  it("returns a string that contains all unique characters and has the lowest lexicographic value possible", () => {
    expect(lowestLexicographicValue("abcbcad")).toBe("abcd");
    expect(lowestLexicographicValue("abacbcbcd")).toBe("abcd");
    expect(lowestLexicographicValue("dcba")).toBe("dcba");
    expect(lowestLexicographicValue("bcabcabcda")).toBe("abcd");
  });

  it("returns an empty string if input string is empty", () => {
    expect(lowestLexicographicValue("")).toBe("");
  });

  it("returns the input string if all characters are unique", () => {
    expect(lowestLexicographicValue("abcd")).toBe("abcd");
  });

  it("returns the input string with duplicates removed if the input string is already sorted", () => {
    expect(lowestLexicographicValue("aabbccdd")).toBe("abcd");
    expect(lowestLexicographicValue("abccddee")).toBe("abcde");
  });

  it("returns the input string with duplicates removed and sorted in lexicographic order", () => {
    expect(lowestLexicographicValue("dbdcacac")).toBe("bdac");
    expect(lowestLexicographicValue("ccbbaa")).toBe("cba");
  });

  it("handles input strings with only one character", () => {
    expect(lowestLexicographicValue("a")).toBe("a");
  });

  it("handles input strings with only two characters", () => {
    expect(lowestLexicographicValue("ab")).toBe("ab");
    expect(lowestLexicographicValue("ba")).toBe("ba");
    expect(lowestLexicographicValue("aa")).toBe("a");
    expect(lowestLexicographicValue("bb")).toBe("b");
  });

  it("handles input strings with repeated characters", () => {
    expect(lowestLexicographicValue("aaabbb")).toBe("ab");
    expect(lowestLexicographicValue("abbabb")).toBe("ab");
    expect(lowestLexicographicValue("abcabc")).toBe("abc");
    expect(lowestLexicographicValue("abcbac")).toBe("abc");
    expect(lowestLexicographicValue("abaacdbdbacac")).toBe("abcd");
  });
});
