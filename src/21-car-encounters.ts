export default function carEncounters(directions: string[]): number {
  let count = 0;
  let right = 0;
  for (let direction of directions) {
    if (direction === "right") {
      right += 1;
    } else {
      count += right;
    }
  }
  return count;
}
