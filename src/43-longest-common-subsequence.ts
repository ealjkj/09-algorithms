export default function longestCommonSubsequence(
  string1: string,
  string2: string
): number {
  const memo = Array.from({ length: string1.length }, () =>
    new Array(string2.length).fill(0)
  );

  const lcs = (
    string1: string,
    string2: string,
    index1: number,
    index2: number
  ) => {
    if (string2.length - index2 === 0) {
      return "";
    }

    if (string1.length - index1 === 0) {
      return "";
    }

    if (memo[index1][index2]) {
      return memo[index1][index2];
    }

    const choices = [];
    for (let i = index1; i < string1.length; i++) {
      for (let j = index2; j < string2.length; j++) {
        if (string1[i] !== string2[j]) {
          continue;
        }

        const choice = string1[i] + lcs(string1, string2, i + 1, j + 1);
        choices.push(choice);
      }
    }

    if (choices.length === 0) {
      memo[index1][index2] = 0;
      return "";
    }

    const ans: string = choices.reduce((prev, curr) => {
      if (prev.length > curr.length) {
        return prev;
      }

      return curr;
    }, "");

    memo[index1][index2] = ans;
    return ans;
  };

  return lcs(string1, string2, 0, 0);
}
