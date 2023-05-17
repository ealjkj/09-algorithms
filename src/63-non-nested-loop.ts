// Assuming it is an undirected graph
export default function nonNestedLoop(graph: number[][]) {
  // compute the edges
  let edges = 0;
  graph.forEach((list) => {
    edges += list.length;
  });

  // Eliminate duplicate edges, since is an undirected graph
  edges /= 2;

  const vertices = graph.length;

  return edges - vertices + 1;
}
