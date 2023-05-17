import { expect, test } from "@jest/globals";
import CircularQueue from "../12-circular-queue";

test("enqueue should add elements to the queue", () => {
  const queue = new CircularQueue(3);
  queue.enqueue(1);
  queue.enqueue(2);
  expect(queue.toArray()).toEqual([1, 2]);
});

test("dequeue should remove and return the first element in the queue", () => {
  const queue = new CircularQueue(3);

  queue.enqueue(1);
  queue.enqueue(2);
  expect(queue.dequeue()).toBe(1);
  expect(queue.toArray()).toEqual([2]);
});

test("enqueue should overwrite the oldest element when the queue is full", () => {
  const queue = new CircularQueue(3);
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  expect(queue.toArray()).toEqual([4, 2, 3]);
});

test("dequeue should throw an error when the queue is empty", () => {
  const queue = new CircularQueue(3);
  expect(() => queue.dequeue()).toThrow();
});

test("peek should return the first element in the queue without removing it", () => {
  const queue = new CircularQueue(3);
  queue.enqueue(1);
  queue.enqueue(2);
  expect(queue.peek()).toBe(1);
  expect(queue.toArray()).toEqual([1, 2]);
});
