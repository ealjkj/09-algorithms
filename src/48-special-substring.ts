export default function specialSubstring(S: string, T: string) {
  if (T.length > S.length) {
    return null;
  }

  const map = new Map();

  for (let letter of T) {
    map.set(letter, 0);
  }

  let min = S.length;
  let minStart = 0;
  let minEnd = 0;

  let start = 0;
  let count = 0;
  let end = 0;
  let found = false;
  let finished = false;

  while (!finished) {
    // Get the first substring
    for (let j = end; j < S.length; j++) {
      const char = S[j];
      const curr = map.get(char);

      if (curr !== undefined) {
        map.set(char, curr + 1);

        if (curr === 0) {
          count++;
        }
      }

      if (count === map.size) {
        end = j;
        found = true;
        break;
      }

      if (j === S.length - 1) {
        finished = true;
      }
    }

    // If we ended the loop
    if (finished) {
      if (found) {
        break;
      }

      return null;
    }

    // Eliminate unnecesary characters from the left of the string
    for (let i = start; i < end; i++) {
      const char = S[i];
      const curr = map.get(char);

      if (curr !== undefined) {
        map.set(char, curr - 1);

        if (curr === 1) {
          count--;
          start = i;

          if (min >= end - start + 1) {
            min = end - start + 1;
            minStart = start;
            minEnd = end;
            start = i + 1;
          }

          break;
        }
      }
    }
  }

  return S.substring(minStart, minEnd + 1);
}
