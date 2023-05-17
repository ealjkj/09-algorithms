export default function topologicalSort(graph: number[][]): number[] | null {
  // 0 is no mark, 1 is temp mark, 2 is perm mark
  const marks = Array(graph.length).fill(0);
  let isCyclic = false;
  const ans: number[] = [];

  for (let i = 0; i < graph.length; i++) {
    if (marks[i] === 0) {
      visit(i);
    }

    if (isCyclic) {
      return null;
    }
  }

  function visit(n: number) {
    if (isCyclic) return;

    if (marks[n] === 2) {
      return;
    }

    if (marks[n] === 1) {
      return (isCyclic = true);
    }

    marks[n] = 1;

    for (let m of graph[n]) {
      visit(m);
    }

    marks[n] = 2;
    ans.push(n);
  }

  return ans.reverse();
}

const listOfNodes = [[1, 2], [2, 3, 4], [4], [4, 5], [5], []];
console.log(topologicalSort(listOfNodes));
