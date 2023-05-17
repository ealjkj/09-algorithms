export default function isBalanced(string: string): Boolean | number {
  const isOpening = (char: string) =>
    char === "(" || char === "[" || char === "{";

  const isClosing = (char: string) =>
    char === ")" || char === "]" || char === "}";

  const pairs: { [key: string]: string } = { "(": ")", "[": "]", "{": "}" };

  let stack = [];
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (isOpening(char)) {
      stack.push(char);
    }

    if (!isClosing(char)) {
      continue;
    }

    const last = stack.pop();
    if (!last) return false;

    if (pairs[last] !== char) {
      return false;
    }
  }

  if (stack.length > 0) return false;
  return true;
}
