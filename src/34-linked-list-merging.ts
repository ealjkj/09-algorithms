import { LinkedList, Node } from "./utils/linkedList";

export default function linkedListSort<T>(
  linkedList: LinkedList<T>
): LinkedList<T> {
  // Empty list case
  if (!linkedList.head) return linkedList;

  const mergeSort = (node: Node<T> | null): Node<T> | null => {
    const head = node;
    //empty list case
    if (node === null) {
      return null;
    }

    // Single node case
    if (!node.next) {
      return node;
    }

    let slow: Node<T> | null = head;
    let fast: Node<T> | null = head;
    let prev: Node<T> | null = null;

    // Find the middle node
    while (fast !== null && fast.next !== null) {
      prev = slow;
      slow = slow!.next;
      fast = fast.next.next;
    }

    prev!.next = null;

    const firstHalf = mergeSort(node);
    const secondHalf = mergeSort(slow);

    return merge(firstHalf, secondHalf);
  };

  linkedList.head = mergeSort(linkedList.head);
  return linkedList;
}

function merge<T>(
  firstHead: Node<T> | null,
  secondHead: Node<T> | null
): Node<T> | null {
  if (!firstHead) return secondHead;
  if (!secondHead) return firstHead;

  let small = firstHead;
  let big = secondHead;

  if (firstHead.value > secondHead.value) {
    small = secondHead;
    big = firstHead;
  }

  const smallNext = small.next;
  if (!smallNext) {
    small.next = big;
    return small;
  }

  if (smallNext.value > big.value) {
    small.next = big;
  }

  merge(smallNext, big);
  return small;
}
