export default class CircularQueue<T> {
  queue: (T | undefined)[];
  length: number;
  front: number;
  rear: number;

  constructor(space: number) {
    this.queue = Array(space);
    this.length = this.queue.length;
    this.front = -1;
    this.rear = -1;
  }

  enqueue(item: T) {
    const wasRearAtLeft = this.rear < this.front;

    this.rear = (this.rear + 1) % this.queue.length;
    if (this.front === -1) this.front = 0;
    this.queue[this.rear] = item;

    if (wasRearAtLeft && this.rear === this.front) {
      this.front = (this.front + 1) % this.queue.length;
    }
  }

  dequeue() {
    if (this.front === -1) {
      throw new Error("Empty queue");
    }

    if (this.front === this.rear) {
      this.queue[this.front] = undefined;
      this.front = -1;
      this.rear = -1;
      return;
    }

    const value = this.queue[this.front];
    this.queue[this.front] = undefined;
    this.front = (this.front + 1) % this.queue.length;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  toArray() {
    return this.queue.filter((element) => element !== undefined);
  }
}
