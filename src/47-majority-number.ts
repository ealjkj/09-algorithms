export default function majorityNumber(numbers: number[]): number | null {
  if (numbers.length === 0) return null;

  let candidate_idx = 0;
  let count = 1;

  for (let i = 1; i < numbers.length; i++) {
    const candidate = numbers[candidate_idx];
    const number = numbers[i];

    if (number === candidate) {
      count += 1;
      candidate_idx = i;
    } else {
      count -= 1;
    }

    if (count === 0) {
      candidate_idx = candidate_idx + 1;
      count = 1;
    }

    // console.log(`candidate_ix is: ${candidate_idx}`);
  }

  count = 0;
  const candidate = numbers[candidate_idx];
  // console.log("candidate is", candidate);

  for (let number of numbers) {
    if (number === candidate) {
      count += 1;
    }
  }

  if (count > numbers.length / 2) return candidate;
  return null;
}
