export class Node<T> {
  value: T;
  left: Node<T> | null;
  right: Node<T> | null;
  parent: Node<T> | null;
  height: number;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.height = 0;
  }

  insertLeft(node: Node<T> | null) {
    if (!node) return null;
    if (node.parent?.left === node) {
      node.parent.deleteLeft();
    } else if (node.parent?.right === node) {
      node.parent.deleteRight();
    }

    const replacedNode = this.left;
    this.left = node;
    node.parent = this;
    this.height = this.height + node.height + 1 - height(replacedNode);
  }

  insertRight(node: Node<T> | null) {
    if (!node) return null;

    //Adjust the height of the parent
    if (node.parent?.left === node) {
      node.parent.deleteLeft();
    } else if (node.parent?.right === node) {
      node.parent.deleteRight();
    }

    const replacedNode = this.left;
    this.right = node;
    node.parent = this;
    this.height = this.height + node.height + 1;
    this.height = this.height + node.height + 1 - height(replacedNode);
  }

  deleteLeft() {
    const node = this.left;
    this.height -= height(this.left) + 1;
    this.left = null;

    return node;
  }

  deleteRight() {
    const node = this.right;
    this.height -= height(this.right) + 1;
    this.right = null;

    return node;
  }
}

function height<T>(node: Node<T> | null) {
  if (!node) return -1;
  return node.height;
}
