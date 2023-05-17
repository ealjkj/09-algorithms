import { expect, test } from "@jest/globals";
import isStringRotation from "../28-detect-string-rotation";

describe("isRotation", () => {
  test("should return true for identical strings", () => {
    expect(isStringRotation("hello", "hello")).toBe(true);
  });

  test("should return false for strings of different lengths", () => {
    expect(isStringRotation("hello", "world")).toBe(false);
  });

  test("should return true for rotated strings", () => {
    expect(isStringRotation("hello", "llohe")).toBe(true);
    expect(isStringRotation("abcde", "deabc")).toBe(true);
    expect(isStringRotation("12345", "34512")).toBe(true);
  });

  test("should return false for non-rotated strings", () => {
    expect(isStringRotation("hello", "leloh")).toBe(false);
    expect(isStringRotation("abcde", "edcba")).toBe(false);
    expect(isStringRotation("12345", "54321")).toBe(false);
  });
});
