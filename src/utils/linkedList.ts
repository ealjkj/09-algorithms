export class Node<T> {
  value: T;
  next: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList<T> {
  head: Node<T> | null;
  constructor() {
    this.head = null;
  }

  toArray() {
    const arr = [];
    let node = this.head;
    while (node) {
      arr.push(node.value);
      node = node.next;
    }
    return arr;
  }

  static fromArray<T>(array: T[], loopStart: number | null = null) {
    const linkedList = new LinkedList();
    if (array.length === 0) return linkedList;
    let parent;
    let loopInitNode = null;
    for (let i = 0; i < array.length; i++) {
      const value = array[i];
      const node = new Node(value);

      if (!linkedList.head) {
        linkedList.head = node;
      } else {
        if (!parent) throw new Error(`parent is null`);
        parent.next = node;
      }

      if (i === loopStart) {
        loopInitNode = node;
      }
      parent = node;
    }

    if (!parent) throw new Error(`parent is null`);
    parent.next = loopInitNode;
    return linkedList;
  }
}

export function getNode<T>(linkedList: LinkedList<T>, index: number) {
  let node = linkedList.head;

  for (let i = 0; i < index; i++) {
    if (!node) throw new Error(`${index} out of the range`);
    node = node.next;
  }
  return node;
}
