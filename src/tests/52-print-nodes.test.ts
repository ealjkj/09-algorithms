import { expect, test } from "@jest/globals";
import printNodes from "../52-print-nodes";

test("Should return the nodes from top to bottom and left to right for a simple tree", () => {
  // prettier-ignore
  const tree = [2, [1], [3]];
  expect(printNodes(tree)).toEqual([2, 1, 3]);
});

test("Should return the nodes from top to bottom and left to right for a medium", () => {
  // prettier-ignore
  const tree = [4, [2, [1], [3]], [6, null, [8]]];
  expect(printNodes(tree)).toEqual([4, 2, 6, 1, 3, 8]);
});

test("Should return the nodes from top to bottom and left to right for a larger", () => {
  // prettier-ignore
  const tree = [5, [3, [2], [4]], [7, [6], [8]]];
  expect(printNodes(tree)).toEqual([5, 3, 7, 2, 4, 6, 8]);
});
