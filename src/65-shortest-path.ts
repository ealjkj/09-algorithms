import { Queue } from "./utils/queue";

export default function shortestPath(
  graph: number[][],
  source: number,
  target: number
): number[] {
  const costs = Array(graph.length).fill(null);
  const prevs = Array(graph.length).fill(null);

  const queue: Queue<number[]> = new Queue();
  queue.enque([-1, source, 0]); // [prev, reached node, cost]
  let filled = 0;
  while (queue.length !== 0 && filled <= graph.length) {
    const element = queue.dequeue();
    if (!element) return [];

    const [prev, node, cost] = element;
    if (costs[node]) {
      continue;
    }

    costs[node] = cost;
    prevs[node] = prev;
    filled += 1;

    for (let child of graph[node]) {
      if (!costs[child]) {
        queue.enque([node, child, cost + 1]);
      }
    }
  }

  let current = target;
  const path: number[] = [];
  // find reversed path
  for (let i = 0; i < graph.length; i++) {
    path.push(current);
    if (current === source) {
      break;
    }
    current = prevs[current];
  }

  return path.reverse();
}

const graph = [
  [1, 3], // 0
  [0, 2], // 1
  [1], // 2
  [0, 4, 7], // 3
  [3, 5, 6, 7], // 4
  [4, 6], // 5
  [4, 5, 7], // 6
  [3, 4, 5], // 7
];
console.log(shortestPath(graph, 2, 6));
