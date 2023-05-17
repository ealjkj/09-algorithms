// A function that will return the maximum of two numbers
function binaryMax(num1: number, num2: number) {
  return num1 > num2 ? num1 : num2;
}

// A funtion that returns the max of a subinterval
// of an array that begins at a certain point of the array.
function maxFrom(array: number[], startIndex: number): number {
  if (startIndex === array.length - 1) {
    return array[startIndex];
  }

  return binaryMax(array[startIndex], maxFrom(array, startIndex + 1));
}

// Max of an array is just maxing the subinterval that starts at index 0
export default function max(array: number[]): number {
  return maxFrom(array, 0);
}
