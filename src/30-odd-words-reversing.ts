export function reverseOddWords(string: string) {
  const words = string.split(" ");
  return words
    .map((value, index) => {
      if (index % 2 === 1) {
        return reverse(value);
      }

      return value;
    })
    .join(" ");
}

function reverse(string: string) {
  let reversed = "";
  for (let i = 0; i < string.length; i++) {
    const char = string[string.length - 1 - i];
    reversed += char;
  }
  return reversed;
}
