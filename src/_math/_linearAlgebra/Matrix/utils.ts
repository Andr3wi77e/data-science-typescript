import { MakeMatrixFnType, MatrixType } from './types';
import Vector, { VectorsType } from '@math/_linearAlgebra/Vector';

export const checkMatrix = (matrix: MatrixType): void | Error => {
  if (matrix.length === 0) {
    return void 0;
  }

  const length: number = matrix[0].getVector().length;

  for (let i = 0; i < matrix.length; i++) {
    const vectorLength = matrix[i].getVector().length;
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
  const matrix: MatrixType = [];

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
  matrix1: MatrixType,
  matrix2: MatrixType
): void | Error => {
  const fv1 = matrix1[0].getVector();
  const fv2 = matrix1[0].getVector();

  if (fv1.length !== fv2.length || matrix1.length !== matrix2.length) {
    throw new Error('Matrices have different dimensions');
  }
};
