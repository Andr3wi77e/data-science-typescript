import { MatrixType } from './types';

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
