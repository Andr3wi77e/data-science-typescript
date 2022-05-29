import Matrix from './Matrix';
import { MatrixType, MakeMatrixFnType } from './types';
import Vector from '@math/_linearAlgebra/Vector';

const rightMatrix: MatrixType = [new Vector([1, 1]), new Vector([1, 1])];
const wrongMatrix: MatrixType = [new Vector([1, 1]), new Vector([1, 1, 1])];

const addMakeMatrixFn =
  (expect: number): MakeMatrixFnType =>
  (i, j) =>
    i === j ? expect : 0;

describe('тестирование Matrix', () => {
  test('Проверка инициализации Matrix', () => {
    expect(() => new Matrix(rightMatrix)).not.toThrowError();
    expect(() => new Matrix(wrongMatrix)).toThrowError();
  });

  describe('Проверка генерации Matrix', () => {
    test('создание матрицы с нулевым размером', () => {
      expect(() => Matrix.identityMatrix(0, 1)).toThrowError();
    });

    test('создание матрицы 2 на 3', () => {
      expect(Matrix.makeMatrix(2, 3, (i, j) => i + j).matrix).toEqual(
        new Matrix([new Vector([0, 1, 2]), new Vector([1, 2, 3])]).matrix
      );
    });

    test('создание единичной матрицы 2 на 2', () => {
      expect(Matrix.identityMatrix(2, 2).matrix).toEqual(
        new Matrix([new Vector([1, 0]), new Vector([0, 1])]).matrix
      );
    });
  });

  describe('Тестирование сложения/вычитания', () => {
    test('проверка работоспособности', () => {
      expect(() => Matrix.identityMatrix(1, 1).add()).not.toThrowError();
      expect(() =>
        Matrix.identityMatrix(1, 1).add(Matrix.identityMatrix(1, 1))
      ).not.toThrowError();
      expect(() =>
        Matrix.identityMatrix(1, 1).add(Matrix.identityMatrix(2, 2))
      ).toThrowError();
    });

    test('сложение единичной матрицы с единичной', () => {
      expect(
        Matrix.identityMatrix(2, 2).add(Matrix.identityMatrix(2, 2)).matrix
      ).toEqual(Matrix.makeMatrix(2, 2, addMakeMatrixFn(2)).matrix);
    });

    test('вычитание единичной матрицы из единичной', () => {
      expect(
        Matrix.identityMatrix(2, 2).subtract(Matrix.identityMatrix(2, 2)).matrix
      ).toEqual(Matrix.makeMatrix(2, 2, addMakeMatrixFn(0)).matrix);
    });
  });

  describe('Тестирование умножения', () => {
    test('умножение на 2', () => {
      expect(Matrix.identityMatrix(2, 2).multiplication(2).matrix).toEqual(
        Matrix.makeMatrix(2, 2, addMakeMatrixFn(2)).matrix
      );
    });
  });
});
