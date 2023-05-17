import { expect, test } from "@jest/globals";
import { LinkedList, getNode } from "../utils/linkedList";
import middleNode from "../31-linked-list-middle-node";

test("Returns the middle node  of an odd linked list", () => {
  const linkedList = LinkedList.fromArray([1, 2, 2, 3, 3, 6, 7, 2, 1]);

  const correct = getNode(linkedList, 4);
  const answer = middleNode(linkedList);

  expect(answer === correct).toBe(true);
});

test("Returns the middle node  of an even linked list", () => {
  const linkedList = LinkedList.fromArray([1, 2, 2, 3, 3, 6, 7, 2]);

  const correct = getNode(linkedList, 4);
  const answer = middleNode(linkedList);

  expect(answer === correct).toBe(true);
});
