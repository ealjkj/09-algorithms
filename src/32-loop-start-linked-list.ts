import { LinkedList, getNode, Node } from "./utils/linkedList";

export default function beginOfLoop<T>(linkedList: LinkedList<T>) {
  let slow = linkedList.head;
  let fast = linkedList.head?.next;

  // Iterate over the linked list in order to find where the pointers meet.
  while (true) {
    if (slow === fast) break;
    slow = slow!.next;
    fast = fast!.next!.next;
  }

  // reset slow pointer and advance fastPointer
  slow = linkedList.head;
  fast = fast!.next;

  // The math says that the pointers will meet at the begining og the loop
  while (true) {
    if (slow === fast) break;
    slow = slow!.next;
    fast = fast!.next; // The fast pointer is no longer fast.
  }

  return slow;
}
