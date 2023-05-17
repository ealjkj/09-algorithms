import { expect, test } from "@jest/globals";
import parenthesisBalanced from "../19-balance-parenthesis";
describe("parenthesisBalance", () => {
  test("returns 0 for an empty string", () => {
    expect(parenthesisBalanced("")).toBe(0);
  });

  test("returns 0 for a string with balanced parentheses", () => {
    expect(parenthesisBalanced("(a(b)c)")).toBe(0);
  });

  test("returns the number of missing opening parentheses when there is one extra closing parenthesis", () => {
    expect(parenthesisBalanced("(a)b)c")).toBe(1);
  });

  test("returns the number of missing closing parentheses when there is one extra opening parenthesis", () => {
    expect(parenthesisBalanced("(a(b)c")).toBe(1);
  });

  test("returns the number of missing opening parentheses when there are multiple extra closing parentheses", () => {
    expect(parenthesisBalanced("(a)b)c)d)e")).toBe(1);
  });

  test("returns the number of missing closing parentheses when there are multiple extra opening parentheses", () => {
    expect(parenthesisBalanced("(a(b(c")).toBe(3);
  });
});
