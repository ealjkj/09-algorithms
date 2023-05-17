type Callback = (number: number) => void;
type Response = void | boolean;

// A funtion that will execute a callback on every number from current to end
function recursiveEnum(current: number, end: number, cb: Callback): Response {
  cb(current);
  return current === end || recursiveEnum(current + 1, end, cb);
}

// The function will log the first 100 numbers by first pushing every number from 1 to 100 to an array
export default function log100(): void {
  const numbers: number[] = [];

  recursiveEnum(1, 100, (num) => {
    numbers.push(num);
  });

  console.log(numbers);
}
