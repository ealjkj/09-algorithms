// I know this is not an optimal queue. But I though the queue implementaiton was not the point of the problems.

export class Queue<T> {
  queue: T[] = [];
  enque(element: T) {
    this.queue.push(element);
  }

  dequeue() {
    return this.queue.shift();
  }

  peek() {
    if (this.queue.length === 0) return null;
    return this.queue[0];
  }

  get length() {
    return this.queue.length;
  }
}
