import { expect, test } from "@jest/globals";
import { LinkedList, getNode } from "../utils/linkedList";
import linkedListSort from "../34-linked-list-merging";

test("Sorts an unsorted linked lists", () => {
  const linkedList = LinkedList.fromArray([1, 2, 2, 3, 3, 6, 7, 2, 1]);

  const correct = [1, 1, 2, 2, 2, 3, 3, 6, 7];
  const answer = linkedListSort(linkedList);
  expect(answer.toArray()).toEqual(correct);
});
