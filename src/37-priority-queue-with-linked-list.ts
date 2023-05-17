import { LinkedList, Node } from "./utils/linkedList";

export default class PriorityQueue<T> {
  queue = new LinkedList<[T, number]>();
  length = 0;

  enqueue(element: T, priority: number) {
    let node = this.queue.head;
    let prev = null;

    while (node) {
      if (node.value[1] < priority) {
        break;
      }

      prev = node;
      node = node.next;
    }

    const newNode = new Node([element, priority] as [T, number]);

    newNode.next = node;

    if (!prev) {
      this.queue.head = newNode;
    } else {
      prev.next = newNode;
    }

    this.length++;
  }

  dequeue() {
    const node = this.queue.head;

    if (!node) {
      return null;
    }

    this.queue.head = node.next;
    this.length--;

    return node.value[0];
  }

  size() {
    return this.length;
  }

  peek() {
    return this.queue.head?.value[0];
  }
}
