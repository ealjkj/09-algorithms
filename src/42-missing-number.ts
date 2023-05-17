export default function missingNumber(numbers: number[]): number {
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }

  return ((numbers.length + 1) * (numbers.length + 2)) / 2 - sum;
}
