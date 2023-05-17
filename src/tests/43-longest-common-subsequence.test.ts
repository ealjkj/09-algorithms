import { expect, test } from "@jest/globals";
import longestCommonSubsequence from "../43-longest-common-subsequence";

describe("findLongestCommonSubsequence", () => {
  it("returns the longest common subsequence of two strings (case 1)", () => {
    const str1 = "AGGTAB";
    const str2 = "GXTXAYB";
    expect(longestCommonSubsequence(str1, str2)).toBe("GTAB");
  });

  it("returns the longest common subsequence of two strings (case 2)", () => {
    const str1 = "ABCDEF";
    const str2 = "FBDAMN";
    expect(longestCommonSubsequence(str1, str2)).toBe("BD");
  });

  it("returns an empty string if no common subsequence is found", () => {
    const str1 = "ABC";
    const str2 = "DEF";
    expect(longestCommonSubsequence(str1, str2)).toBe("");
  });
});
