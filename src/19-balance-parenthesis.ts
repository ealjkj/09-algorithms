export default function parenthesisBalanced(string: string): Boolean | number {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    const c = string[i];
    if (c === "(") counter++;
    else if (c === ")") counter--;
    if (counter === -1) return -counter;
  }
  return counter;
}
