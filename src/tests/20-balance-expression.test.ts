import { expect, test } from "@jest/globals";
import isBalanced from "../20-balance-expression";

describe("isBalanced", () => {
  it("returns true for an empty string", () => {
    expect(isBalanced("")).toBe(true);
  });

  it("returns true for a balanced expression", () => {
    expect(isBalanced("({[]})")).toBe(true);
  });

  it("returns false for an unbalanced expression with too many opening brackets", () => {
    expect(isBalanced("({[})")).toBe(false);
  });

  it("returns false for an unbalanced expression with too many closing brackets", () => {
    expect(isBalanced("({]})")).toBe(false);
  });

  it("returns false for an unbalanced expression with mismatched brackets", () => {
    expect(isBalanced("({[})]")).toBe(false);
  });
});
