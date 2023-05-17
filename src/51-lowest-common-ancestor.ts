export default function LCA<T>(tree: any[], n1: any, n2: any): T[] {
  const path1 = rootToNodePath(tree, n1);
  const path2 = rootToNodePath(tree, n2);

  for (let i = 0; i < path1.length; i++) {
    const ancestor1 = path1[i];
    const ancestor2 = path2[i];

    if (ancestor1 !== ancestor2) {
      return path1[i - 1];
    }
  }

  return tree;
}

function rootToNodePath(root: any, node: any) {
  const path: any[] = [];

  const fillPath = (root: any, node: any, path: any[]) => {
    if (!root) {
      return false;
    }

    path.push(root);

    if (root === node) {
      return true;
    }

    if (root[1] && fillPath(root[1], node, path)) {
      return true;
    }

    if (root[2] && fillPath(root[2], node, path)) {
      return true;
    }

    path.pop();
    return false;
  };

  fillPath(root, node, path);
  return path;
}
