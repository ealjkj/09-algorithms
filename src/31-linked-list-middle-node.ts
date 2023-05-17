import { LinkedList, Node } from "./utils/linkedList";

export default function middleNode<T>(linkedList: LinkedList<T>) {
  const head = linkedList.head;

  //empty list case
  if (head === null) {
    return null;
  }

  let slow: Node<T> | null = head;
  let fast: Node<T> | null = head;

  // Find the middle node
  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return slow;
}
