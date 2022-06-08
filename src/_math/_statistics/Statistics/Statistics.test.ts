import Statistics from './Statistics';
import Vector from '@math/_linearAlgebra/Vector';

const defaultDataset = [1, 2, 3];

const statistics = new Statistics(defaultDataset);

describe('Тестирование Statistics', () => {
  describe('тестирование инициализации', () => {
    test('инициализация массивом', () => {
      expect(() => statistics).not.toThrowError();
    });
    test('инициализация Vector', () => {
      expect(
        () => new Statistics(new Vector(defaultDataset))
      ).not.toThrowError();
    });
  });

  describe('тестирование max/min', () => {
    test('тестирование max', () => {
      expect(new Statistics(defaultDataset).max).toBe(3);
    });
    test('тестирование min', () => {
      expect(new Statistics(defaultDataset).min).toBe(1);
    });
  });

  describe('тестирование поквзателей центра распределения', () => {
    test('тестирование среднего', () => {
      expect(statistics.mean).toBe(2);
    });
    test('тестирование медианы', () => {
      expect(new Statistics([1, 3, 2]).median).toBe(2);
      expect(new Statistics([1, 3, 2, 2]).median).toBe(2);
      expect(new Statistics([1, 3, 2, 2, 5, 6]).median).toBe(2.5);
    });
    test('тестирование квантиля', () => {
      expect(new Statistics([1, 2, 3, 4, 5]).quantile(0.2)).toBe(2);
      expect(new Statistics([1, 2, 3, 4, 5]).quantile(0.5)).toBe(4);
    });
    test('тестирование моды', () => {
      expect(new Statistics([1, 2, 3, 4, 5, 5]).mode).toEqual([5]);
      expect(new Statistics([1, 2, 2, 3, 4, 5, 5]).mode).toEqual([2, 5]);
    });
  });

  describe('тестирование поквзателей вариации', () => {
    test('тестирование размаха', () => {
      expect(statistics.range).toBe(2);
    });
    test('тестирование дисперсии', () => {
      expect(statistics.variance).toBe(1);
    });
    test('тестирование стандартного отклонения', () => {
      expect(statistics.standardDeviation).toBe(1);
    });
    test('тестирование интерквартильного размаха', () => {
      expect(new Statistics([1, 2, 3, 4, 5]).interquartileRange).toBe(2);
    });
  });
});
