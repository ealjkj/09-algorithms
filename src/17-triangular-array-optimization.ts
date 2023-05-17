export default class SymmetricMatrix {
  data: any;
  height: number;
  width: number;

  constructor(matrix: number[][]) {
    this.height = matrix.length;
    this.width = matrix[0].length;
    this.data = Array(this.height);

    for (let i = 0; i < matrix.length; i++) {
      const row = Array(i + 1);
      for (let j = 0; j < i + 1; j++) {
        row[j] = matrix[i][j];
      }
      this.data[i] = row;
    }
  }

  get(i: number, j: number) {
    if (j > i) {
      return this.data[j][i];
    }
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
