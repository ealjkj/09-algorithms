import { expect, test } from "@jest/globals";
import shuffle from "../10-array-shuffle";

test("Shuffled array should not be equal to the original array", () => {
  expect(shuffle([0, 1, 2, 3, 4, 5, 6])).not.toBe([0, 1, 2, 3, 4, 5, 6]);
});

test("Two shuffles should not be the same", () => {
  const array = [0, 1, 2, 3, 4, 5, 6];
  const shuffle1 = shuffle([...array]);
  const shuffle2 = shuffle([...array]);
  expect(shuffle1).not.toBe(shuffle2);
});

test("Shuffling should not be cyclic", () => {
  const array = [0, 1, 2, 3, 4];
  const shuffle1 = shuffle([...array]);
  const shuffle2 = shuffle(shuffle1);
  const shuffle3 = shuffle(shuffle2);
  const shuffle4 = shuffle(shuffle3);
  const shuffle5 = shuffle(shuffle4);

  expect(shuffle1).not.toBe(array);
  expect(shuffle2).not.toBe(array);
  expect(shuffle3).not.toBe(array);
  expect(shuffle4).not.toBe(array);
  expect(shuffle5).not.toBe(array);
});
