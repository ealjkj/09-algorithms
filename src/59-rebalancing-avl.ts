import { BST } from "./57-insert-and-delete-bst";
import { Node } from "./utils/node";

export class AVL extends BST {
  constructor() {
    super();
  }

  insert(node: Node<number>): Node<number> | undefined {
    super.insert(node);
    let w = null;
    let child = node;
    let parent = node.parent;
    let grand = parent?.parent;

    while (grand) {
      if (!isBalanced(grand)) {
        w = parent;
        break;
      }

      child = parent as Node<number>;
      parent = grand as Node<number>;
      grand = grand.parent;
    }

    if (w === null) return node;

    // Case 1: Left left case
    if (grand?.left?.left === child) {
      this.leftLeftRotation(grand, parent as Node<number>, child);
    }

    // Case 2: Left right case
    if (grand?.left?.right === child) {
      this.leftRightRotation(grand, parent as Node<number>, child);
    }

    // Case 3: Right left case
    if (grand?.right?.left === child) {
      this.rightLeftRotation(grand, parent as Node<number>, child);
    }

    // Case 4: Right right case
    if (grand?.right?.right === child) {
      this.rightRightRotation(grand, parent as Node<number>, child);
    }

    return node;
  }

  leftLeftRotation(
    grand: Node<number>,
    parent: Node<number>,
    child: Node<number>
  ) {
    // Rotate the values
    const temp = grand.value;
    grand.value = parent.value;
    parent.value = temp;

    parent.insertLeft(parent.right);
    parent.insertRight(grand.right);
    grand.insertRight(parent);
    grand.insertLeft(child);
  }

  rightRightRotation(
    grand: Node<number>,
    parent: Node<number>,
    child: Node<number>
  ) {
    // Rotate the values
    const temp = grand.value;
    grand.value = parent.value;
    parent.value = temp;

    parent.insertRight(parent.left);
    parent.insertLeft(grand.left);
    grand.insertLeft(parent);
    grand.insertRight(child);
  }

  leftRightRotation(
    grand: Node<number>,
    parent: Node<number>,
    child: Node<number>
  ) {
    // Rotate the values
    const temp = grand.value;
    grand.value = child.value;
    child.value = temp;

    parent.insertRight(child.left);
    child.insertLeft(child.left);
    child.insertRight(grand.right);
    grand.insertRight(child);
  }

  rightLeftRotation(
    grand: Node<number>,
    parent: Node<number>,
    child: Node<number>
  ) {
    // Rotate the values
    const temp = grand.value;
    grand.value = child.value;
    child.value = temp;

    parent.insertLeft(child.right);
    child.insertRight(child.right);
    child.insertLeft(grand.left);
    grand.insertLeft(child);
  }
}

function height(node: Node<number> | null) {
  if (!node) return -1;
  return node.height;
}

function balance(node: Node<number>) {
  return height(node.left) - height(node.right);
}

function isBalanced(node: Node<number>) {
  return Math.abs(balance(node)) <= 1;
}

const avl = new AVL();

const node5 = new Node(5);
const node3 = new Node(3);
const node7 = new Node(7);
const node2 = new Node(2);
const node4 = new Node(4);
const node6 = new Node(6);
const node8 = new Node(8);

avl.insert(node5);
avl.insert(node3);
avl.insert(node4);

avl.print();
// const node = avl.search(3);
// console.log(node?.value, node === node3);
