import { expect, test } from "@jest/globals";
import recursiveFinding from "../14-route-finding";

describe("findRoutes", () => {
  test("should return all possible routes from start to end in a 2x2 matrix", () => {
    const dimentions = [2, 2];
    const start = [0, 0];
    const end = [1, 1];
    const expectedOutput = ["RD", "DR"];
    const actualOutput = recursiveFinding(dimentions, start, end);
    expect(actualOutput.sort()).toEqual(expectedOutput.sort());
  });

  test("should return all possible routes from start to end in a 3x3 matrix", () => {
    const dimentions = [3, 3];
    const start = [0, 0];
    const end = [2, 2];
    const expectedOutput = ["RDDR", "RRDD", "RDRD", "DRRD", "DRDR", "DDRR"];
    const actualOutput = recursiveFinding(dimentions, start, end);
    expect(actualOutput.sort()).toEqual(expectedOutput.sort());
  });

  test("should return an empty array if the start position is equal to the end position", () => {
    const dimentions = [3, 3];
    const start = [0, 0];
    const end = [0, 0];
    const expectedOutput = [] as number[];
    const actualOutput = recursiveFinding(dimentions, start, end);
    expect(actualOutput.sort()).toEqual(expectedOutput.sort());
  });

  test("should return an empty array if the start position is greater than the end position", () => {
    const dimentions = [3, 3];
    const start = [1, 1];
    const end = [0, 0];
    const expectedOutput = [] as number[];
    const actualOutput = recursiveFinding(dimentions, start, end);
    expect(actualOutput.sort()).toEqual(expectedOutput.sort());
  });

  test("should return all possible routes for a 3x3 matrix with start at [1, 0]", () => {
    const dimentions = [3, 3];
    const start = [1, 0];
    const end = [2, 2];
    const actualOutput = recursiveFinding(dimentions, start, end);
    const expectedOutput = ["RRD", "RDR", "DRR"];
    expect(actualOutput.sort()).toEqual(expectedOutput.sort());
  });

  test("should handle larger matrices with arbitrary start and end positions", () => {
    const dimentions = [7, 7];
    const start = [2, 3];
    const end = [5, 6];
    const actualOutput = recursiveFinding(dimentions, start, end);
    expect(actualOutput.length).toBe(20);
  });
});
