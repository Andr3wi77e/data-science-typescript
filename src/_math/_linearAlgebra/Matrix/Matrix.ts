import { MatrixType } from './types';
import { checkMatrix } from './utils';

class Matrix {
  private matrix: MatrixType;

  constructor(matrix: MatrixType) {
    checkMatrix(matrix);
    this.matrix = matrix;
  }
}

export default Matrix;
