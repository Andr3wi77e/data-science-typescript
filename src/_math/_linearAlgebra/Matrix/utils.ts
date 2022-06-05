import {
  MakeMatrixFnType,
  MatrixInputType,
  MatrixType,
  MatrixValueType,
} from './types';
import Vector, { VectorsType } from '@math/_linearAlgebra/Vector';
import Matrix from './Matrix';

export const checkMatrix = (matrix: MatrixType): void | Error => {
  if (matrix.length === 0) {
    return void 0;
  }

  const _matrix = convertArgs([matrix])[0];

  const length: number = _matrix[0].vector.length;

  for (let i = 0; i < _matrix.length; i++) {
    const vectorLength = _matrix[i].vector.length;
    if (vectorLength !== length) {
      throw new Error('Vectors have different lengths');
    }
  }
};

export const checkIsZeroDimension = (
  rows: number,
  columns: number
): void | Error => {
  if (rows === 0 || columns === 0) {
    throw new Error('Trying to create a matrix with size zero');
  }
};

export const makeMatrix = (
  rows: number,
  columns: number,
  fn: MakeMatrixFnType
): MatrixType => {
  checkIsZeroDimension(rows, columns);
  const matrix: MatrixValueType = [];

  for (let i = 0; i < rows; i++) {
    const vector: VectorsType = [];
    for (let j = 0; j < columns; j++) {
      vector[j] = fn(i, j);
    }
    matrix[i] = new Vector(vector);
  }
  return matrix;
};

export const identityMatrixFn: MakeMatrixFnType = (i, j) => {
  return i === j ? 1 : 0;
};

export const checkIsSameDimensions = (
  matrix1: MatrixValueType,
  matrix2: MatrixValueType
): void | Error => {
  const fv1 = matrix1[0].vector;
  const fv2 = matrix1[0].vector;

  if (fv1.length !== fv2.length || matrix1.length !== matrix2.length) {
    throw new Error('Matrices have different dimensions');
  }
};

export function convertArgs(values: MatrixType[]): Vector[][] {
  const vectorsMatrices: Vector[][] = [];

  values.forEach(matrix => {
    const vectors: Vector[] = [];
    matrix.forEach(value => {
      if (!(value instanceof Vector)) {
        vectors.push(new Vector(value));
      } else {
        vectors.push(value);
      }
    });
    vectorsMatrices.push(vectors);
  });

  return vectorsMatrices;
}

export const convertInputArgs = (values: MatrixInputType[]): Matrix[] => {
  const matrices: Matrix[] = [];

  values.forEach(value => {
    if (value instanceof Matrix) {
      matrices.push(value);
    } else {
      matrices.push(new Matrix(value));
    }
  });

  return matrices;
};
