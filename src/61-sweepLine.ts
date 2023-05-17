import { BST } from "./utils/bst";
import PriorityQueue from "./60-priority-queue-heap";

type Point = {
  x: number;
  y: number;
};

type Line = {
  start: Point;
  end: Point;
};

const HORIZONTAL_START = "horizontal-start";
const HORIZONTAL_END = "horizontal-end";
const VERTICAL = "vertical";

export default function lineIntersections(
  verticalLines: Line[],
  horizontalLines: Line[]
): Point[] {
  const events = new PriorityQueue<[string, Line]>();

  // Queue all vertical lines
  for (let line of verticalLines) {
    const event = [VERTICAL, line] as [string, Line];
    events.enqueue(event, line.start.x);
  }

  // Queue all horizontal lines
  for (let line of horizontalLines) {
    const event1 = [HORIZONTAL_START, line] as [string, Line];
    events.enqueue(event1, line.start.x);

    const event2 = [HORIZONTAL_END, line] as [string, Line];
    events.enqueue(event2, line.end.x);
  }

  const bst = new BST();
  let intersections: Point[] = [];

  // Sweep Line!
  while (events.peek()) {
    const [type, line] = events.dequeue();
    // Horizontal line starts
    if (type === HORIZONTAL_START) {
      bst.insert(line.start.y);
    }

    // Horizontal line end
    else if (type === HORIZONTAL_START) {
      bst.delete(line.start.y);
    }

    // Vertical line is found
    else {
      const yInRange = bst.rangeSearch(line.start.y, line.start.x);
      intersections = intersections.concat(
        yInRange.map((value) => ({ x: line.start.x, y: value }))
      );
    }
  }

  return intersections;
}

const verticalLines = [{ start: { x: 2, y: 1 }, end: { x: 2, y: 3 } }];

const horizontalLines = [{ start: { x: 1, y: 2 }, end: { x: 3, y: 2 } }];

console.log(lineIntersections(verticalLines, horizontalLines));
