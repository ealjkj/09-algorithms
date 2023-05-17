export default function arraySum(array1: number[], array2: number[]): number[] {
  const [smallArray, bigArray] = orderArrays(array1, array2);
  const answer = [...bigArray];

  let saved = 0;
  for (let i = 0; i < bigArray.length; i++) {
    // Sum both numbers at position i (from right to left)
    const first = bigArray[bigArray.length - 1 - i];
    const second = smallArray[smallArray.length - 1 - i] || 0;
    let sum = first + second + saved;

    // if sum exeeds 9 we save 1 unit for later and we take the sum digit for the answer
    if (sum > 9) {
      saved = 1;
      sum -= 10;
    } else {
      saved = 0;
    }

    // update the answer
    answer[answer.length - 1 - i] = sum;
  }

  // If there is 1 unit saved its added to the start of the answer
  if (saved === 1) answer.unshift(1);
  return answer;
}

function orderArrays<T>(array1: T[], array2: T[]): [T[], T[]] {
  let bigArray = array1;
  let smallArray = array2;

  if (array1.length < array2.length) {
    bigArray = array2;
    smallArray = array1;
  }

  return [smallArray, bigArray];
}
