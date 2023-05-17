import { expect, test } from "@jest/globals";
import { LinkedList, getNode } from "../utils/linkedList";
import reverseLinkedList from "../36-reverse-linked-list";

test("Even linked list", () => {
  const linkedList = LinkedList.fromArray([1, 2, 2, 3, 3, 2, 2, 1]);
  expect(reverseLinkedList(linkedList)).toStrictEqual(
    LinkedList.fromArray([1, 2, 2, 3, 3, 2, 2, 1])
  );
});

test("Odd linked list", () => {
  const linkedList = LinkedList.fromArray([1, 2, 2, 3, 5, 3, 2, 2, 1]);
  expect(reverseLinkedList(linkedList)).toStrictEqual(
    LinkedList.fromArray([1, 2, 2, 3, 5, 3, 2, 2, 1])
  );
});

test("Empty", () => {
  const linkedList = LinkedList.fromArray([]);
  expect(reverseLinkedList(linkedList)).toStrictEqual(LinkedList.fromArray([]));
});
