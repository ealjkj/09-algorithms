export default function isInterleaved(
  A: string,
  B: string,
  C: string
): Boolean {
  if (A.length + B.length !== C.length) return false;

  const memo = Array.from({ length: B.length }, () =>
    new Array(A.length).fill(0)
  );

  const isInter = (indexA: number, indexB: number, indexC: number) => {
    if (indexA + indexB === C.length) return true;
    if (indexA === A.length) return B.slice(indexB) === C.slice(indexC);
    if (indexB === B.length) return A.slice(indexA) === C.slice(indexC);

    if (memo[indexA][indexB]) return memo[indexA][indexB];

    if (A[indexA] === C[indexC]) {
      if (isInter(indexA + 1, indexB, indexC + 1)) {
        memo[indexA][indexB] = true;
        return true;
      }
      B;
    }

    if (B[indexB] === C[indexC]) {
      if (isInter(indexA, indexB + 1, indexC + 1)) {
        memo[indexA][indexB] = true;
        return true;
      }
    }

    memo[indexA][indexB] = false;
    return false;
  };

  return isInter(0, 0, 0);
}

console.log(isInterleaved("abc", "def", "adbecf"));
