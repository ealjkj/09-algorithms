export default function swapElements(array: number[]): number[] {
  const copy = [...array];
  for (let i = 0; i < array.length; i++) {
    array[i] = copy[array[i]];
  }
  return array;
}

// // An failed attepmt for a more optimal solution
// export default function swapElements(array: number[]): number[] {
//   let i = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < i) continue;
//     swapCycle(array, i);
//   }
//   return array;
// }

// function swapCycle(array: number[], startIndex: number): number[] {
//   const initialNumber = array[startIndex];
//   array[startIndex] = array[array[startIndex]];
//   let j = initialNumber;

//   while (startIndex !== j) {
//     const nextIndex = array[j];
//     array[j] = array[array[j]];

//     if (nextIndex === startIndex) {
//       array[j] = initialNumber;
//     }
//     j = nextIndex;
//   }

//   return array;
// }
