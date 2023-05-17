import { expect, test } from "@jest/globals";
import convertToBase from "../23-base-convertion";

describe("convertToBase", () => {
  it("converts a decimal number to binary", () => {
    const decimalNum = 13;
    const base = 2;
    const expected = "1101";
    const result = convertToBase(decimalNum, base);
    expect(result).toBe(expected);
  });

  it("converts a decimal number to hexadecimal", () => {
    const decimalNum = 300;
    const base = 16;
    const expected = "12C";
    const result = convertToBase(decimalNum, base);
    expect(result).toBe(expected);
  });

  it("returns the decimal number as a string when the base is 10", () => {
    const decimalNum = 42;
    const base = 10;
    const expected = "42";
    const result = convertToBase(decimalNum, base);
    expect(result).toBe(expected);
  });

  it("returns 0 as a string when the decimal number is 0", () => {
    const decimalNum = 0;
    const base = 2;
    const expected = "0";
    const result = convertToBase(decimalNum, base);
    expect(result).toBe(expected);
  });
});
