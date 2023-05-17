const ABC = "abcdefghijklmnñopqrstuvwxyz";
const getAlphabetIndex = (char: string) => char.charCodeAt(0) - 97;

export default function isThereTranslation(
  translationPairs: string[][],
  source: string,
  target: string
): boolean {
  if (source.length !== target.length) return false;
  const graph = createGraph(translationPairs);

  for (let i = 0; i < source.length; i++) {
    const letter1 = source[i];
    const letter2 = target[i];
    if (
      !pathExists(graph, getAlphabetIndex(letter1), getAlphabetIndex(letter2))
    ) {
      return false;
    }
  }

  return true;
}

function createGraph(charPairs: string[][]) {
  const graph = Array(ABC.length);
  for (let [key, value] of charPairs) {
    if (!graph[getAlphabetIndex(key)]) {
      graph[getAlphabetIndex(key)] = [];
    }

    graph[getAlphabetIndex(key)].push(getAlphabetIndex(value));
  }
  return graph;
}

function pathExists(
  graph: number[][],
  source: number,
  target: number
): boolean {
  // 0 is no mark, 1 is temp mark, 2 is perm mark
  const marks = Array(graph.length).fill(0);
  let pathFound = false;

  visit(source);
  if (pathFound) return true;

  function visit(n: number) {
    if (n === target) {
      return (pathFound = true);
    }

    if (marks[n] === 2) {
      return;
    }

    if (marks[n] === 1) {
      return;
    }

    marks[n] = 1;

    if (graph[n]) {
      for (let m of graph[n]) {
        visit(m);
      }
    }

    marks[n] = 2;
  }

  return false;
}

// const translationPairs = [
//   ["i", "r"],
//   ["c", "t"],
//   ["k", "p"],
//   ["o", "c"],
//   ["r", "o"],
//   ["t", "e"],
//   ["t", "f"],
//   ["u", "h"],
//   ["w", "p"],
// ];

// console.log(isThereTranslation(translationPairs, "we", "we")); // true
// console.log(isThereTranslation(translationPairs, "can", "the")); // false
// console.log(isThereTranslation(translationPairs, "work", "people")); // false
// console.log(isThereTranslation(translationPairs, "it", "of")); // true
// console.log(isThereTranslation(translationPairs, "out", "the")); // true

const translationPairs2 = [
  ["a", "c"],
  ["b", "a"],
  ["a", "b"],
];

console.log(isThereTranslation(translationPairs2, "aaa", "abc")); // true
console.log(isThereTranslation(translationPairs2, "abc", "aaa")); // false
console.log(isThereTranslation(translationPairs2, "acm", "bcm")); // true
