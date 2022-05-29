import type { VectorType } from '@math/_linearAlgebra/Vector';
import { MatrixType, MakeMatrixFnType, MathMatrixType } from './types';
import {
  checkMatrix,
  identityMatrixFn,
  makeMatrix,
  checkIsSameDimensions,
} from './utils';

class Matrix {
  private _matrix: MatrixType;

  constructor(matrix: MatrixType) {
    checkMatrix(matrix);
    this._matrix = matrix;
  }

  get matrix() {
    return this._matrix;
  }

  private set matrix(_m: MatrixType) {
    this._matrix = _m;
  }

  math(type: MathMatrixType, matrices: Matrix[]): Matrix {
    if (matrices.length === 0) {
      return this;
    }

    const newMatrix: MatrixType = this.matrix;

    matrices.forEach(matrix => {
      checkIsSameDimensions(matrix.matrix, newMatrix);

      for (let i = 0; i < newMatrix.length; i++) {
        newMatrix[i].math(type, [matrix.matrix[i]]);
      }
    });

    this.matrix = newMatrix;

    return new Matrix(newMatrix);
  }

  add(...matrices: Matrix[]): Matrix {
    return this.math('add', matrices);
  }
  subtract(...matrices: Matrix[]): Matrix {
    return this.math('subtract', matrices);
  }

  multiplication(...values: VectorType[]): Matrix {
    const newMatrix: MatrixType = this.matrix;

    values.forEach(value => {
      for (let i = 0; i < newMatrix.length; i++) {
        newMatrix[i].multiplication(value);
      }
    });

    this.matrix = newMatrix;

    return new Matrix(newMatrix);
  }

  static makeMatrix(
    rows: number,
    columns: number,
    fn: MakeMatrixFnType
  ): Matrix {
    return new Matrix(makeMatrix(rows, columns, fn));
  }

  static identityMatrix(rows: number, columns?: number): Matrix {
    return Matrix.makeMatrix(rows, columns || rows, identityMatrixFn);
  }
}

export default Matrix;
