export default function shuffle<T>(array: Array<T>): Array<T> {
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * array.length);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
