import Matrix from './Matrix';
import { MatrixType } from './types';
import Vector from '@math/_linearAlgebra/Vector';

const rightMatrix: MatrixType = [new Vector([1, 1]), new Vector([1, 1])];
const wrongMatrix: MatrixType = [new Vector([1, 1]), new Vector([1, 1, 1])];

describe('тестирование Matrix', () => {
  test('Проверка инициализации Matrix', () => {
    expect(() => new Matrix(rightMatrix)).not.toThrowError();
    expect(() => new Matrix(wrongMatrix)).toThrowError();
  });
});
