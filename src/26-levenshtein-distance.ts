export default function levenshteinDistance(string1: string, string2: string) {
  const memo = Array.from({ length: string1.length }, () =>
    new Array(string2.length).fill(0)
  );

  const ld = (
    string1: string,
    string2: string,
    index1: number,
    index2: number
  ): number => {
    if (string2.length - index2 === 0) {
      return string1.length - index1;
    }

    if (string1.length - index1 === 0) {
      return string2.length - index2;
    }

    if (memo[index1][index2]) {
      return memo[index1][index2];
    }

    if (string1[index1] === string2[index2]) {
      const ans = ld(string1, string2, index1 + 1, index2 + 1);
      memo[index1][index2] = ans;
      return ans;
    }

    const ans =
      1 +
      Math.min(
        ld(string1, string2, index1 + 1, index2),
        ld(string1, string2, index1, index2 + 1),
        ld(string1, string2, index1 + 1, index2 + 1)
      );

    memo[index1][index2] = ans;
    return ans;
  };

  return ld(string1, string2, 0, 0);
}
