import { expect, test } from "@jest/globals";
import majorityNumber from "../47-majority-number";

describe("findMajorityNumber", () => {
  it("returns undefined for an empty array", () => {
    expect(majorityNumber([])).toBeNull();
  });

  it("returns the correct majority number when there is one", () => {
    expect(majorityNumber([1, 1, 2])).toEqual(1);
    expect(majorityNumber([1, 1, 2, 2, 2])).toEqual(2);
    expect(majorityNumber([1, 1, 1, 2, 2, 2, 2])).toEqual(2);
    expect(majorityNumber([1, 2, 2, 2, 2, 3, 3])).toEqual(2);
    expect(majorityNumber([2, 2, 2, 2, 3, 3, 3])).toEqual(2);
    expect(majorityNumber([1, 1, 2, 2, 2, 2, 3])).toEqual(2);
    expect(majorityNumber([1, 1, 2, 2, 2, 2, 3, 2, 3])).toEqual(2);
  });

  it("returns the correct majority number when there is a block at the begining", () => {
    expect(majorityNumber([1, 1, 1, 1, 2, 2, 2, 2, 2, 2])).toEqual(2);
  });

  it("returns undefined when there is no majority number", () => {
    expect(majorityNumber([1, 2])).toBeNull();
    expect(majorityNumber([1, 2, 3])).toBeNull();
    expect(majorityNumber([1, 2, 3, 4])).toBeNull();
    expect(majorityNumber([1, 1, 2, 2])).toBeNull();
    expect(majorityNumber([1, 2, 3, 4, 5])).toBeNull();
  });

  it("works for unsorted arrays", () => {
    expect(majorityNumber([2, 1, 2, 3, 2])).toEqual(2);
    expect(majorityNumber([2, 1, 2, 2, 2, 3, 1])).toEqual(2);
    expect(majorityNumber([4, 4, 4, 4, 5, 5, 4, 3])).toEqual(4);
  });

  it("returns undefined when there are two majority numbers", () => {
    expect(majorityNumber([1, 1, 2, 2])).toBeNull();
    expect(majorityNumber([1, 2, 2, 3, 3])).toBeNull();
    expect(majorityNumber([1, 2, 2, 3, 3, 3])).toBeNull();
  });
});
