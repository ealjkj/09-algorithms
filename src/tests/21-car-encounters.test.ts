import { expect, test } from "@jest/globals";
import carEncounters from "../21-car-encounters";

describe("countCarPasses", () => {
  it("returns 0 when there are no cars", () => {
    const carDirections: string[] = [];
    const numPasses = carEncounters(carDirections);
    expect(numPasses).toBe(0);
  });

  it("returns 0 when there is only one car", () => {
    const carDirections: string[] = ["right"];
    const numPasses = carEncounters(carDirections);
    expect(numPasses).toBe(0);
  });

  it("returns 0 when all cars are traveling in the same direction", () => {
    const carDirections: string[] = ["right", "right", "right", "right"];
    const numPasses = carEncounters(carDirections);
    expect(numPasses).toBe(0);
  });

  it("returns the correct number of passes for cars traveling in opposite directions", () => {
    const carDirections: string[] = [
      "right",
      "right",
      "left",
      "left",
      "left",
      "right",
    ];
    const numPasses = carEncounters(carDirections);
    expect(numPasses).toBe(6);
  });

  it("returns the correct number of passes for cars traveling in a random pattern of directions", () => {
    const carDirections: string[] = [
      "right",
      "left",
      "right",
      "right",
      "left",
      "left",
      "right",
    ];
    const numPasses = carEncounters(carDirections);
    expect(numPasses).toBe(7);
  });

  it("returns the correct number of passes for cars traveling in alternating directions", () => {
    const carDirections: string[] = ["right", "left", "right", "left", "right"];
    const numPasses = carEncounters(carDirections);
    expect(numPasses).toBe(3);
  });
});
