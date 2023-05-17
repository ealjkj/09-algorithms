export default function consecutiveSequence(
  sequence: number[],
  target: number
): number[] | null {
  let startIndex = 0;
  let endIndex = 0;
  let sum = 0;

  while (endIndex <= sequence.length) {
    if (sum === target) {
      return sequence.slice(startIndex, endIndex);
    }

    if (sum < target) {
      sum += sequence[endIndex];
      endIndex++;
    } else {
      sum -= sequence[startIndex];
      startIndex++;
    }
  }

  return null;
}
