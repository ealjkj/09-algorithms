type PathTree = {
  down: any;
  right: any;
  end?: boolean;
};

export default function findRoutes(
  dimentions: number[],
  start: number[],
  end: number[]
): string[] {
  // both points should be at the matrix
  if (!isValidPoint(dimentions, start) || !isValidPoint(dimentions, end)) {
    throw new Error("invalid start or end point");
  }

  const [i_0, j_0] = start;
  const [i_n, j_n] = end;
  if (i_0 > i_n) return [];
  if (j_0 > j_n) return [];
  if (i_0 === i_n && j_0 === j_n) return [];

  const memo = {};
  const tree = recursiveFinding(dimentions, start, end, memo);
  return pathTreeToArray(tree);
}

function recursiveFinding(
  dimentions: number[],
  start: number[],
  end: number[],
  memo = {} as any
): PathTree {
  const pathTree = { down: null, right: null } as PathTree;
  const [m, n] = dimentions;
  const [i_0, j_0] = start;
  const [i_n, j_n] = end;
  if (i_0 === i_n && j_0 === j_n) return { down: null, right: null, end: true };

  const down = [i_0 + 1, j_0];
  if (isValidPoint(dimentions, down) && i_0 <= i_n) {
    if (!memo[i_0 + 1] || !memo[i_0 + 1][j_0]) {
      pathTree.down = recursiveFinding(dimentions, down, end);
      memo[i_0 + 1] = { ...memo[i_0 + 1] };
      memo[i_0 + 1][j_0] = pathTree.down;
    } else {
      pathTree.down = memo[i_0 + 1][j_0];
    }
  }

  const right = [i_0, j_0 + 1];
  if (isValidPoint(dimentions, right) && j_0 <= j_n) {
    if (!memo[i_0] || !memo[i_0][j_0 + 1]) {
      pathTree.right = recursiveFinding(dimentions, right, end);
      memo[i_0] = { ...memo[i_0] };
      memo[i_0][j_0 + 1] = pathTree.right;
    } else {
      pathTree.right = memo[i_0][j_0 + 1];
    }
  }

  return pathTree;
}

function pathTreeToArray(tree: PathTree): string[] {
  if (tree === null) return [];
  if (tree.end) return [""];
  const downPaths = pathTreeToArray(tree.down).map((path) => "D" + path);
  const rightPaths = pathTreeToArray(tree.right).map((path) => "R" + path);

  return [...downPaths, ...rightPaths];
}

function isValidPoint(dimentions: number[], point: number[]) {
  const [m, n] = dimentions;
  const [i, j] = point;
  const validI = 0 <= i && i < m;
  const validJ = 0 <= j && j < n;
  return validI && validJ;
}
