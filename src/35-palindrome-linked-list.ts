import { LinkedList, Node } from "./utils/linkedList";

export default function isPalindrome<T>(linkedList: LinkedList<T>) {
  const head = linkedList.head;
  let listIsEven = false;

  //empty list case
  if (head === null) {
    return true;
  }

  let slow: Node<T> | null = head;
  let fast: Node<T> | null = head;
  const list = [];

  // Find the middle node and avoid loops
  while (fast !== null && fast.next !== null) {
    list.push(slow!.value);

    slow = slow!.next;
    fast = fast.next.next;

    if (fast === null) {
      listIsEven = true;
    }

    if (slow === fast) {
      return false;
    }
  }

  if (!listIsEven) {
    slow = slow!.next;
  }

  while (slow !== null) {
    if (slow.value !== list.pop()) {
      return false;
    }

    slow = slow.next;
  }

  return true;
}
