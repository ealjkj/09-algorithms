export default function countFishAlive(fishes: [number, string][]): number {
  let survivors = 0;
  const stack: number[] = [];
  for (let [size, direction] of fishes) {
    // Every fish swimming to the right will be added to the stack
    if (direction === "right") {
      stack.push(size);
      continue;
    }

    // If a fish is swimming to the left will be compared to each element on the stack.
    let survives = true;
    while (stack.length > 0 && survives) {
      const leftSize = stack.pop();
      if (!leftSize) return -1;

      if (leftSize > size) {
        stack.push(leftSize);
        survives = false;
      }
    }

    if (survives) survivors += 1;
  }

  // After every comparison all the elements on the stack also survived
  survivors += stack.length;

  return survivors;
}
