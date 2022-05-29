import Vector from './Vector';
import { differenceVectorsLength } from './utils';

const vector1 = [1, 1];
const vector2 = [2, 2];
const vector3 = [1, 1, 1];

const vector1Add2 = [3, 3];
const vector1Add22 = [5, 5];

const vector1Subtract2 = [-1, -1];
const vector1Subtract22 = [-3, -3];

const vector1Multiplication2 = [2, 2];
const vector1Multiplication0 = [0, 0];

const multiplicationTests = [
  { testValue: 0, expectValue: vector1Multiplication0 },
  { testValue: 1, expectValue: vector1 },
  { testValue: 2, expectValue: vector1Multiplication2 },
];

describe('тестирование Vector', () => {
  describe('add', () => {
    test('Проверка вызова ошибки при разных длинах векторов', () => {
      expect(() => new Vector(vector1).add(new Vector(vector3))).toThrowError(
        differenceVectorsLength('add')
      );
    });

    test('Проверка сложения векторов, ноль параметров', () => {
      expect(new Vector(vector1).add().getVector()).toEqual(
        new Vector(vector1).getVector()
      );
    });

    test('Проверка сложения векторов, 1 параметр', () => {
      expect(new Vector(vector1).add(new Vector(vector2)).getVector()).toEqual(
        new Vector(vector1Add2).getVector()
      );
    });

    test('Проверка сложения векторов, 2 параметра', () => {
      expect(
        new Vector(vector1)
          .add(new Vector(vector2), new Vector(vector2))
          .getVector()
      ).toEqual(new Vector(vector1Add22).getVector());
    });
  });

  describe('subtract', () => {
    test('Проверка вызова ошибки при разных длинах векторов', () => {
      expect(() =>
        new Vector(vector1).subtract(new Vector(vector3))
      ).toThrowError(differenceVectorsLength('subtract'));
    });

    test('Проверка вычитания векторов, ноль параметров', () => {
      expect(new Vector(vector1).subtract().getVector()).toEqual(
        new Vector(vector1).getVector()
      );
    });

    test('Проверка вычитания векторов, 1 параметр', () => {
      expect(
        new Vector(vector1).subtract(new Vector(vector2)).getVector()
      ).toEqual(new Vector(vector1Subtract2).getVector());
    });

    test('Проверка вычитания векторов, 2 параметра', () => {
      expect(
        new Vector(vector1)
          .subtract(new Vector(vector2), new Vector(vector2))
          .getVector()
      ).toEqual(new Vector(vector1Subtract22).getVector());
    });
  });

  describe('multiplication', () => {
    multiplicationTests.forEach(({ testValue, expectValue }) => {
      test(`Проверка умножения на скаляр, * ${testValue}`, () => {
        expect(
          new Vector(vector1).multiplication(testValue).getVector()
        ).toEqual(new Vector(expectValue).getVector());
      });
    });

    test(`Проверка умножения на скаляры, *2 * 2`, () => {
      expect(new Vector(vector1).multiplication(2, 2).getVector()).toEqual(
        new Vector([4, 4]).getVector()
      );
    });
  });
});
