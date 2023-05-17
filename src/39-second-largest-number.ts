export default function secondLargest(numbers: number[]): number | null {
  if (numbers.length < 2) {
    return null;
  }

  let max = Math.max(numbers[0], numbers[1]);
  let second = Math.min(numbers[0], numbers[1]);

  for (let i = 2; i < numbers.length; i++) {
    const number = numbers[i];
    if (number > max) {
      second = max;
      max = number;
    } else if (number > second) {
      second = number;
    }
  }

  return second;
}
