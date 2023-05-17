export default class SparseMatrix {
  data: any;
  height: number;
  width: number;

  constructor(matrix: number[][]) {
    this.height = matrix.length;
    this.width = matrix[0].length;
    this.data = {} as any;

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] === 0) continue;
        this.data[i] = { ...this.data[i] };
        this.data[i][j] = matrix[i][j];
      }
    }
  }

  get(i: number, j: number) {
    if (i < 0 || i >= this.height) return undefined;
    if (j < 0 || j >= this.width) return undefined;
    if (!this.data[i] || !this.data[i][j]) return 0;

    return this.data[i][j];
  }

  getRow(i: number) {
    const row = Array(this.width);
    for (let j = 0; j < this.width; j++) {
      row[j] = this.get(i, j);
    }
    return row;
  }

  getColumn(j: number) {
    const column = Array(this.height);
    for (let i = 0; i < this.height; i++) {
      column[i] = this.get(i, j);
    }
    return column;
  }
}
