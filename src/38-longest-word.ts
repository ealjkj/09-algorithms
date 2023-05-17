import Trie, { TrieNode } from "./54-dictionary-to-trie";
// @ts-ignore
import words from "an-array-of-english-words";

const ABC = "abcdefghijklmnñopqrstuvwxyz";
const getAlphabetIndex = (char: string) => char.charCodeAt(0) - 97;

export default function longestWord(letters: string[]): string {
  const codes = letters.map((letter) => getAlphabetIndex(letter));
  const dict = words.reduce((obj: any, word: string) => {
    obj[word] = true;
    return obj;
  }, {});

  const trie = new Trie(dict);
  let max = 0;
  let maxNode = trie.root;

  const recursiveSearch = (node: TrieNode, level: number) => {
    if (!node) return;

    if (level > max) {
      maxNode = node;
      max = level;
    }

    for (let code of codes) {
      recursiveSearch(node.children[code], level + 1);
    }
  };

  recursiveSearch(trie.root, 0);

  const maxWordArray: string[] = [];
  let node: TrieNode | null = maxNode;
  while (node) {
    maxWordArray.push(node.letter);
    node = node.parent;
  }

  return maxWordArray.reverse().reduce((a, b) => a + b, "");
}

console.log(longestWord("ncouabli".split("")));
