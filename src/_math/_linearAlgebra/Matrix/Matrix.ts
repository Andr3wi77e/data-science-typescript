import {
  MakeMatrixFnType,
  MathMatrixType,
  MatrixType,
  MatrixValueType,
  MatrixInputType,
} from './types';
import {
  checkIsSameDimensions,
  checkMatrix,
  convertArgs,
  identityMatrixFn,
  makeMatrix,
  convertInputArgs,
} from './utils';
import { VectorType } from '@math/_linearAlgebra/Vector';

class Matrix {
  private _matrix: MatrixValueType;

  constructor(matrix: MatrixType) {
    checkMatrix(matrix);
    this._matrix = convertArgs([matrix])[0];
  }

  get matrix(): MatrixValueType {
    return this._matrix;
  }

  private set matrix(_m: MatrixType) {
    this._matrix = convertArgs([_m])[0];
  }

  math(type: MathMatrixType, matrices: MatrixInputType[]): Matrix {
    if (matrices.length === 0) {
      return this;
    }

    const _matrices = convertInputArgs(matrices);

    const newMatrix: MatrixType = this.matrix;

    _matrices.forEach(matrix => {
      checkIsSameDimensions(matrix.matrix, newMatrix);

      for (let i = 0; i < newMatrix.length; i++) {
        newMatrix[i].math(type, [matrix.matrix[i]]);
      }
    });

    this.matrix = newMatrix;

    return new Matrix(newMatrix);
  }

  add(...matrices: MatrixInputType[]): Matrix {
    return this.math('add', matrices);
  }
  subtract(...matrices: MatrixInputType[]): Matrix {
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
