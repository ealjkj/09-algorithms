import { expect, test } from "@jest/globals";
import arraySum from "../08-base-10-sum";

test("Sum arrays with the same length", () => {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];

  const answer = [5, 7, 9];
  expect(arraySum(array1, array2)).toStrictEqual(answer);
});

test("Sum arrays with the large (> 5) digits", () => {
  const array1 = [5, 6, 7];
  const array2 = [8, 9, 7];

  const answer = [1, 4, 6, 4];
  expect(arraySum(array1, array2)).toStrictEqual(answer);
});

test("Sum arrays with array1 larger than array2", () => {
  const array1 = [1, 2, 3, 5, 6, 7];
  const array2 = [8, 9, 7];

  const answer = [1, 2, 4, 4, 6, 4];
  expect(arraySum(array1, array2)).toStrictEqual(answer);
});

test("Sum arrays with array2 larger than array1", () => {
  const array1 = [8, 9, 7];
  const array2 = [1, 2, 3, 5, 6, 7];

  const answer = [1, 2, 4, 4, 6, 4];
  expect(arraySum(array1, array2)).toStrictEqual(answer);
});

test("Sum array1 with an array consisting of only 9's", () => {
  const array1 = [9, 9];
  const array2 = [1];

  const answer = [1, 0, 0];
  expect(arraySum(array1, array2)).toStrictEqual(answer);
});
