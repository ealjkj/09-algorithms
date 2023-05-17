type Dict = { [key: string]: any };

const ABC = "abcdefghijklmnñopqrstuvwxyz";
const getAlphabetIndex = (char: string) => char.charCodeAt(0) - 97;

export class TrieNode {
  children: TrieNode[];
  letter: string;
  parent: TrieNode | null;
  value?: any;

  constructor(letter: string) {
    this.children = Array(ABC.length);
    this.letter = letter;
    this.parent = null;
  }
}

export default class Trie {
  root: TrieNode;

  constructor(dict: Dict) {
    this.root = new TrieNode("");

    for (let word in dict) {
      let curr = this.root;

      for (let i = 0; i < word.length; i++) {
        const char = word[i];

        if (curr.children[getAlphabetIndex(char)]) {
          curr = curr.children[getAlphabetIndex(char)];
          continue;
        }

        const node = new TrieNode(char);
        node.parent = curr;
        curr.children[getAlphabetIndex(char)] = node;
        curr = node;
        if (i === word.length - 1) {
          node.value = dict[word];
        }
      }
    }
  }

  getDefinition(word: string) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!curr) return null;

      curr = curr.children[getAlphabetIndex(word[i])];
      if (i === word.length - 1) {
        return curr.value;
      }
    }
  }
}

const dict = {
  one: "uno",
  two: "dos",
  foo: "bar",
};

// const trie = new Trie(dict);
// console.log(trie.getDefinition("foo"));
