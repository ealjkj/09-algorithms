import { expect, test } from "@jest/globals";
import { LinkedList, getNode } from "../utils/linkedList";
import lastNodes from "../33-linked-list-last-k-nodes";

test("Returns the last node of an abritrary linked list", () => {
  const k = 8;
  const linkedList = LinkedList.fromArray([1, 2, 2, 3, 3, 6, 7, 2, 1]);

  const correct = getNode(linkedList, 8);
  const answer = lastNodes(linkedList, k);
  expect(answer).toEqual([correct]);
});

test("Returns the last 4 nodes of an abritrary linked list", () => {
  const k = 5;
  const linkedList = LinkedList.fromArray([1, 2, 2, 3, 3, 6, 7, 2, 1]);

  const last1 = getNode(linkedList, 5);
  const last2 = getNode(linkedList, 6);
  const last3 = getNode(linkedList, 7);
  const last4 = getNode(linkedList, 8);
  const answer = lastNodes(linkedList, k);
  expect(answer).toEqual([last1, last2, last3, last4]);
});

test("Returns an empty array if the linked list is empty", () => {
  const k = 4;
  const linkedList = LinkedList.fromArray([]);

  const answer = lastNodes(linkedList, k);
  expect(answer).toEqual([]);
});
