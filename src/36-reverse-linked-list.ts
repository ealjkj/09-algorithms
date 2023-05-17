import { LinkedList, Node, getNode } from "./utils/linkedList";

export default function reverseLinkedList<T>(linkedList: LinkedList<T>) {
  let node = linkedList.head;
  if (!node) return linkedList;

  let prev = null;
  let next = node.next;

  while (next) {
    node.next = prev;
    prev = node;
    node = next;
    next = node.next;
  }

  //Update the last node
  node.next = prev;
  linkedList.head = node;

  return linkedList;
}
