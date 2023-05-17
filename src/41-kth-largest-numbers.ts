import { MinHeap } from "./utils/heap";

export default function kthLargest(
  numbers: number[],
  k: number
): number[] | null {
  if (k > numbers.length) return null;
  const kLargest: MinHeap<number> = new MinHeap();

  for (let number of numbers) {
    kLargest.insert(number);
    if (kLargest.size() > k) {
      kLargest.extractMin();
    }
  }
  return kLargest.toArray();
}
