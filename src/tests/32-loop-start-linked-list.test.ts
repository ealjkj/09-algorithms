import { expect, test } from "@jest/globals";
import { LinkedList, getNode } from "../utils/linkedList";
import beginOfLoop from "../32-loop-start-linked-list";

test("Returns the begining of a loop of an arbitrary array", () => {
  const indexOfLoopStart = 3;
  const linkedList = LinkedList.fromArray(
    [1, 2, 2, 3, 3, 6, 7, 2, 1],
    indexOfLoopStart
  );

  const correct = getNode(linkedList, indexOfLoopStart);
  const answer = beginOfLoop(linkedList);

  expect(answer === correct).toBe(true);
});
