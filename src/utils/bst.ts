import { Node } from "./node";

export class BST {
  root: Node<number> | null;
  constructor() {
    this.root = null;
  }

  insertNode(node: Node<number>) {
    if (!this.root) {
      return (this.root = node);
    }

    const recursiveInsert = (ancestor: Node<number>, node: Node<number>) => {
      const { value, left, right } = ancestor;
      const nodeValue = node.value;

      if (nodeValue < value) {
        //  Goes to the left
        if (!left) {
          return ancestor.insertLeft(node);
        }
        recursiveInsert(left, node);
      } else {
        if (!right) {
          return ancestor.insertRight(node);
        }
        recursiveInsert(right, node);
      }

      return ancestor;
    };

    recursiveInsert(this.root, node);
  }

  deleteNode(node: Node<number>) {
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
    this.deleteNode(rightMinNode);
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

  search(value: number) {
    if (!this.root) return null;

    const sch = (node: Node<number>): Node<number> | null => {
      if (node.value === value) {
        return node;
      }

      if (value < node.value) {
        if (!node.left) return null;
        return sch(node.left);
      }

      // If the node es greater or equal
      if (!node.right) return null;
      return sch(node.right);
    };

    return sch(this.root);
  }

  insert(value: number) {
    const node = new Node(value);
    this.insertNode(node);
    return node;
  }

  delete(value: number) {
    const node = this.search(value);
    if (!node) return null;

    this.deleteNode(node);
  }

  rangeSearch(a: number, b: number) {
    const values: number[] = [];

    const recursiveSearch = (node: Node<number> | null) => {
      if (!node) {
        return;
      }

      if (a < node.value) {
        recursiveSearch(node.right);
      }

      if (a <= node.value && b >= node.value) {
        values.push(node.value);
      }

      recursiveSearch(node.right);
    };

    recursiveSearch(this.root);
    return values;
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
