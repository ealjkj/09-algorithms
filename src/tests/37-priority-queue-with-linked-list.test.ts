import { expect, test } from "@jest/globals";
import { LinkedList, getNode } from "../utils/linkedList";
import PriorityQueue from "../37-priority-queue-with-linked-list";

describe("PriorityQueue", () => {
  test("starts empty", () => {
    const pq = new PriorityQueue();
    expect(pq.size()).toBe(0);
  });

  test("can add elements with priority", () => {
    const pq = new PriorityQueue();
    pq.enqueue("a", 1);
    pq.enqueue("b", 2);
    pq.enqueue("c", 3);
    expect(pq.size()).toBe(3);
  });

  test("can peek the highest priority element", () => {
    const pq = new PriorityQueue();
    pq.enqueue("a", 1);
    pq.enqueue("b", 2);
    pq.enqueue("c", 3);
    expect(pq.peek()).toBe("c");
  });

  test("can dequeue elements in priority order", () => {
    const pq = new PriorityQueue();
    pq.enqueue("a", 1);
    pq.enqueue("b", 2);
    pq.enqueue("c", 3);
    expect(pq.dequeue()).toBe("c");
    expect(pq.size()).toBe(2);
    expect(pq.dequeue()).toBe("b");
    expect(pq.size()).toBe(1);
    expect(pq.dequeue()).toBe("a");
    expect(pq.size()).toBe(0);
  });
});
