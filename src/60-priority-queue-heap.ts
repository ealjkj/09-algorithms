import { MinHeap } from "./utils/heap";

export default class PriorityQueue<T> {
  heap = new MinHeap<[number, T]>();

  enqueue(element: T, priority: number) {
    return this.heap.insert([priority, element]);
  }

  dequeue() {
    const min = this.heap.extractMin() as [number, T];
    return min[1];
  }

  size() {
    return this.heap.size();
  }

  peek() {
    if (this.heap.isEmpty()) return null;
    return this.heap.peak()[1];
  }
}
