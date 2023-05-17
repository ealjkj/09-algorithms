import Trie from "./54-dictionary-to-trie";

const getAlphabetIndex = (char: string) => char.charCodeAt(0) - 97;

export default function wordFound(stream: any, words: string[]): boolean {
  const dict = words.reduce((obj: any, word) => {
    obj[word] = true;
    return obj;
  }, {});

  const trie = new Trie(dict);
  let next = stream.next();
  let done = next.done;
  let node = trie.root;

  while (next.value) {
    const { value } = next;
    node = node.children[getAlphabetIndex(value)];

    if (!node) {
      return false;
    }

    done = next.done;
    next = stream.next();
  }

  if (node.value === true) {
    return true;
  }

  return false;
}

const array = ["h", "e", "l", "l", "o"];
const it = array[Symbol.iterator]();
console.log(wordFound(it, ["foo", "bar", "hello"]));
