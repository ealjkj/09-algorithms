import { expect, test } from "@jest/globals";
import countFishAlive from "../22-bigger-fishes";

describe("countFishAlive", () => {
  it("returns the correct number of fish when all fish are swimming in the same direction", () => {
    const fish: [number, string][] = [
      [1, "right"],
      [2, "right"],
      [3, "right"],
      [4, "right"],
      [5, "right"],
      [6, "right"],
      [7, "right"],
    ];
    const numFishAlive = countFishAlive(fish);
    expect(numFishAlive).toBe(fish.length);
  });

  it("returns the correct number of fish when all fish are of equal size", () => {
    const fish: [number, string][] = [
      [1, "right"],
      [1, "left"],
      [1, "right"],
      [1, "left"],
    ];
    const numFishAlive = countFishAlive(fish);
    expect(numFishAlive).toBe(2);
  });

  it("returns the correct number of fish when they meet multiple times", () => {
    const fish: [number, string][] = [
      [2, "right"],
      [6, "left"],
      [1, "right"],
      [7, "left"],
      [5, "left"],
      [4, "right"],
      [3, "left"],
    ];
    const numFishAlive = countFishAlive(fish);
    expect(numFishAlive).toBe(4);
  });

  it("returns the correct number of fish when some fish meet and are eaten", () => {
    const fish: [number, string][] = [
      [5, "right"],
      [3, "left"],
      [1, "right"],
      [2, "left"],
      [6, "right"],
      [4, "left"],
    ];
    const numFishAlive = countFishAlive(fish);
    expect(numFishAlive).toBe(2);
  });

  it("returns the correct number of fish when all fish meet and are eaten", () => {
    const fish: [number, string][] = [
      [4, "left"],
      [5, "right"],
      [2, "right"],
      [6, "left"],
      [1, "left"],
      [3, "left"],
    ];
    const numFishAlive = countFishAlive(fish);
    expect(numFishAlive).toBe(4);
  });
});
