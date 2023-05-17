import { expect, test } from "@jest/globals";
import LCA from "../51-lowest-common-ancestor";

test("Should be able to find the root as the LCA", () => {
  // prettier-ignore
  const tree : any = [2, [2, [4], [5]], [3, [6], [7]]];
  expect(LCA(tree, tree[1][2], tree[2][1])).toEqual(tree);
});

test("Should be able to find the root as the LCA", () => {
  // prettier-ignore
  const tree : any = [2, [2, [4], [5]], [3, [6], [7]]];
  expect(LCA(tree, tree[1][1], tree[1][2])).toEqual(tree[1]);
});
