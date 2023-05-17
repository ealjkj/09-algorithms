import { LinkedList, Node } from "./utils/linkedList";

export default function lastNodes<T>(linkedList: LinkedList<T>, k: number) {
  let node = linkedList.head;

  if (!node) return [];

  for (let i = 0; i < k; i++) {
    if (!node.next) return [];
    node = node.next;
  }

  const arr = [];
  while (node) {
    arr.push(node);
    node = node.next;
  }

  return arr;
}
