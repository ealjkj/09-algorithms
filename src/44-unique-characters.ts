const ABC = "abcdefghijklmnopqrstuvwxyz";
const getAlphabetIndex = (char: string) => char.charCodeAt(0) - 97;

export default function lowestLexicographicValue(string: string): string {
  const lastIndexes = Array(ABC.length);
  const marks = Array(ABC.length).fill(false);
  const stack: string[] = [];

  // Fill last index array
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const charNumber = getAlphabetIndex(char);
    lastIndexes[charNumber] = i;
  }

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const charNumber = getAlphabetIndex(char);

    if (marks[charNumber]) {
      continue;
    }

    while (
      stack[stack.length - 1] &&
      stack[stack.length - 1] > char &&
      i < lastIndexes[getAlphabetIndex(stack[stack.length - 1])]
    ) {
      const prev = stack.pop();
      if (prev === undefined) return ""; // This can't happen
      marks[getAlphabetIndex(prev)] = false;
    }

    stack.push(char);
    marks[charNumber] = true;
  }

  return stack.reduce((a, b) => a + b, "");
}

console.log(lowestLexicographicValue("bcabcabcda"));
