// function createBinaryTree<T>(arr: T[]) {
//   function recursiveBT(arr: T[], startIndex: number, endIndex: number): any {
//     //Includes startIndex but not includes endIndex
//     if (startIndex === endIndex) return null;
//     if (startIndex + 1 === endIndex) return { value: arr[startIndex] };
//     const mid = 1 + startIndex + Math.floor((endIndex - startIndex - 1) / 2);

//     return {
//       value: arr[startIndex],
//       left: recursiveBT(arr, startIndex + 1, mid),
//       right: recursiveBT(arr, mid, endIndex),
//     };
//   }

//   return recursiveBT(arr, 0, arr.length);
// }

// type HeapType<T> = {
//   value: T;
//   left?: HeapType<T>;
//   right?: HeapType<T>;
// };

// export default class Heap<T> {
//   heap: HeapType<T>;

//   constructor(array: T[]) {
//     this.heap = createBinaryTree(array);
//     this.heapify(this.heap);
//   }

//   heapify(heap: HeapType<T>) {
//     if (heap.left) this.heapify(heap.left);
//     if (heap.right) this.heapify(heap.right);

//     if (heap.left && heap.left.value > heap.value) {
//       const temp = heap.value;
//       heap.value = heap.left.value;
//       heap.left.value = temp;
//       this.heapify(heap.left);
//     }

//     if (heap.right && heap.right.value > heap.value) {
//       const temp = heap.value;
//       heap.value = heap.right.value;
//       heap.right.value = temp;
//       this.heapify(heap.right);
//     }
//   }
// }

// I did not implement the following heap. It is just a placeholder to finish the problem

export class MinHeap<T> {
  private heap: T[];

  constructor() {
    this.heap = [];
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildIndex(index: number): number {
    return index * 2 + 1;
  }

  private getRightChildIndex(index: number): number {
    return index * 2 + 2;
  }

  private swap(index1: number, index2: number): void {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  private siftUp(): void {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] > this.heap[index]) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  private siftDown(): void {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      const smallerChildIndex =
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;

      if (this.heap[index] > this.heap[smallerChildIndex]) {
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
      } else {
        break;
      }
    }
  }

  public insert(value: T): void {
    this.heap.push(value);
    this.siftUp();
  }

  public extractMin(): T | undefined {
    if (this.heap.length === 0) {
      return undefined;
    }

    if (this.heap.length === 1) {
      return this.heap.pop()!;
    }

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.siftDown();
    return minValue;
  }

  public size(): number {
    return this.heap.length;
  }

  public isEmpty(): boolean {
    return this.heap.length === 0;
  }

  public toArray(): T[] {
    return this.heap;
  }

  public peak(): T {
    return this.heap[0];
  }
}
