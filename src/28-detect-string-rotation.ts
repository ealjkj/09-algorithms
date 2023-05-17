export default function isStringRotation(
  string1: string,
  string2: string
): Boolean {
  return (string1 + string1).includes(string2);
}
