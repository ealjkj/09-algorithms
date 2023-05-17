import { Queue } from "./utils/queue";

export default function printNodes(tree: any[]) {
  const queue = new Queue<any>();
  queue.enque(tree);
  const valueList = [];

  while (queue.length > 0) {
    const node = queue.dequeue();

    const [value, left, right] = node;
    valueList.push(value);

    if (left) {
      queue.enque(left);
    }

    if (right) {
      queue.enque(right);
    }
  }

  return valueList;
}

const tree = [
  0,
  [1],
  [2, [1], [5, [3], [5, [6]], [9]]],
  [3, [0]],
  [5],
  [7, [3, [3], [0, [9], [4]]]],
];

console.log(tree.length);
