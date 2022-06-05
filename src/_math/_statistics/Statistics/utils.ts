import {
  StatisticsDatasetConstructorType,
  StatisticsDatasetType,
} from './types';
import Vector, { VectorType } from '@math/_linearAlgebra/Vector';
import { sum } from '@helpers/math';

export const init = (dataset: StatisticsDatasetConstructorType): Vector => {
  if (dataset instanceof Vector) {
    return dataset;
  } else {
    return new Vector(dataset);
  }
};

export const sort = (dataset: StatisticsDatasetType) => {
  return dataset.vector.slice().sort((a, b) => a - b);
};

export const max = (dataset: StatisticsDatasetType) => {
  return Math.max(...dataset.vector);
};

export const min = (dataset: StatisticsDatasetType) => {
  return Math.min(...dataset.vector);
};

export const mean = (dataset: StatisticsDatasetType) => {
  const _d = dataset.vector;
  return sum(_d) / _d.length;
};

export const median = (dataset: StatisticsDatasetType) => {
  const _d = sort(dataset);

  if (_d.length % 2 === 0) {
    const x1 = _d[_d.length / 2 - 1];
    const x2 = _d[_d.length / 2];

    return (x1 + x2) / 2;
  } else {
    return _d[(_d.length - 1) / 2];
  }
};

export const quantile = (dataset: StatisticsDatasetType, percent: number) => {
  const index = Math.trunc(Math.min(percent, 1) * dataset.vector.length);

  return sort(dataset)[index];
};

export const mode = (dataset: StatisticsDatasetType) => {
  const values: Record<VectorType, VectorType> = {};
  const maxValues: VectorType[] = [];

  const _d = sort(dataset);

  _d.forEach(value => {
    values[value] = (values[value] || 0) + 1;
  });

  const max = Math.max(...Object.values(values));

  Object.keys(values).forEach(value => {
    const _v = Number.parseInt(value);
    if (values[_v] === max) {
      maxValues.push(_v);
    }
  });

  return maxValues;
};
