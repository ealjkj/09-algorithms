export default function isStringPermutation(
  string1: string,
  string2: string
): Boolean {
  // If strings have different length, it means there is no permutation
  if (string1.length !== string2.length) {
    return false;
  }

  const map = new Map();

  // Put numbers on the map
  for (let c of string1) {
    const current = map.get(c);
    map.set(c, current ? current + 1 : 1);
  }

  // Taking numbers out of the map
  for (let c of string2) {
    const current = map.get(c);

    if (current === 0 || !current) {
      return false;
    }

    map.set(c, current - 1);
  }

  return true;
}
