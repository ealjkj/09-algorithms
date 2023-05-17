import { Node } from "./utils/node";

export class BST {
  root: Node<number> | null;
  constructor() {
    this.root = null;
  }

  insert(node: Node<number>) {
    if (!this.root) {
      return (this.root = node);
    }

    const insertNode = (ancestor: Node<number>, node: Node<number>) => {
      const { value, left, right } = ancestor;
      const nodeValue = node.value;

      if (nodeValue < value) {
        //  Goes to the left
        if (!left) {
          return ancestor.insertLeft(node);
        }
        insertNode(left, node);
      } else {
        if (!right) {
          return ancestor.insertRight(node);
        }
        insertNode(right, node);
      }

      return ancestor;
    };

    insertNode(this.root, node);
  }

  delete(node: Node<number>) {
    // const deleteNode = (node: Node<number>) => {};
    const { value, left, right, parent } = node;
    const isLeaf = !left && !right;

    // Case 1: node to delete is a leaf
    if (isLeaf) {
      if (!parent) return (this.root = null);

      if (parent.left === node) {
        return (parent.left = null);
      }

      if (parent.right === node) {
        return (parent.right = null);
      }
    }

    // Case 2.a: node to delete only has a left children
    if (!right) {
      if (!left) return;
      if (!parent) return (this.root = left);

      if (parent.left === node) {
        return parent.insertLeft(left);
      }

      if (parent.right === node) {
        return parent.insertRight(left);
      }

      return;
    }

    // Case 2.b: node to delete only has a right child
    if (!left) {
      if (!right) return;
      if (!parent) return (this.root = right);

      if (parent.left === node) {
        return parent.insertLeft(right);
      }

      if (parent.right === node) {
        return parent.insertRight(right);
      }

      return;
    }

    // Case 3: node to delete has both children
    const rightMinNode = this.minNode(right);
    node.value = rightMinNode.value;
    this.delete(rightMinNode);
  }

  minNode(node: Node<number>) {
    let { left } = node;
    let prev = node;
    while (left) {
      prev = left;
      left = left.left;
    }

    return prev;
  }

  print() {
    function printTree(node: Node<any> | null, prefix = "", isLeft = true) {
      if (!node) {
        return;
      }

      const nodeValue = node.value.toString();

      // Print the node value with appropriate prefix
      console.log(`${prefix}${isLeft ? "├──" : "└──"}${nodeValue}`);

      // Recursively print the left and right subtrees
      printTree(node.left, `${prefix}${isLeft ? "│   " : "    "}`, true);
      printTree(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    printTree(this.root);
  }
}

const bst = new BST();

const node5 = new Node(5);
const node3 = new Node(3);
const node7 = new Node(7);
const node2 = new Node(2);
const node4 = new Node(4);
const node6 = new Node(6);
const node8 = new Node(8);

bst.insert(node5);
bst.insert(node3);
bst.insert(node7);
bst.insert(node2);
bst.insert(node4);
bst.insert(node6);
bst.insert(node8);

// bst.print();
// bst.delete(node3);
// bst.print();
