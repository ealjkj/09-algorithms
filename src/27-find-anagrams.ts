import isStringPermutation from "./29-detect-string-permutation";

export default function findAnagrams(text: string, string: string): string[] {
  const sourceMap = new Map();
  const targetMap = new Map();
  const ans = [];

  if (string.length === 0) return [];

  // Put numbers on the map
  for (let c of string) {
    const prev = targetMap.get(c);
    targetMap.set(c, prev ? prev + 1 : 1);
  }

  let size = 0;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];

    const targetQuantity = targetMap.get(c);
    const prev = sourceMap.get(c);

    if (targetQuantity !== undefined) {
      const current = prev ? prev + 1 : 1;
      sourceMap.set(c, current);

      if (prev !== targetQuantity) {
        size++;
      }
    }

    if (i >= string.length) {
      const startIndex = i - string.length;
      const char = text[startIndex];

      if (targetMap.get(char)) {
        sourceMap.set(char, sourceMap.get(char) - 1);

        if (targetMap.get(char) > sourceMap.get(char)) {
          size--;
        }
      }
    }

    if (size === string.length) {
      ans.push(text.slice(i - string.length + 1, i + 1));
    }
  }

  return ans;
}
