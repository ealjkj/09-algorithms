export default function secondLargest(stream: any): number {
  let max = null;
  let second = null;

  let next = stream.next();
  let done = next.done;

  while (!done) {
    const { value } = next;
    done = next.done;

    if (max === undefined) {
      return (max = value);
    }

    if (second === undefined) {
      return (second = value);
    }

    if (value > max) {
      second = max;
      max = value;
    } else if (value > second) {
      second = value;
    }

    next = stream.next();
  }

  return second;
}

const array = [2, 3, 5, 3, 7, 4, 3];
const it = array[Symbol.iterator]();

console.log(secondLargest(it));
