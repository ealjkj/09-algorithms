import { BST } from "./57-insert-and-delete-bst";
import { Node } from "./utils/node";

export class AVL extends BST {
  constructor() {
    super();
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
avl.insert(node7);
avl.insert(node2);
avl.insert(node4);
avl.insert(node6);
avl.insert(node8);

// avl.print();
// const node = avl.search(3);
// console.log(node?.value, node === node3);
