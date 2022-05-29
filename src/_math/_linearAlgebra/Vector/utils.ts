import { VectorsType, VectorType } from './types';

export type MathVectorType = 'add' | 'subtract';

const operator = (
  v1: VectorType,
  v2: VectorType,
  type: MathVectorType
): VectorType => {
  switch (type) {
    case 'add':
      return v1 + v2;
    case 'subtract':
      return v1 - v2;
  }
};

export const differenceVectorsLength = (type: MathVectorType) => {
  return `${type}: difference vectors length`;
};

export const mathVector = (
  vector1: VectorsType,
  vector2: VectorsType,
  type: MathVectorType
) => {
  if (vector1.length !== vector2.length) {
    throw new Error(differenceVectorsLength(type));
  }
  const vector: VectorsType = [];

  vector1.forEach((v1i, index) => {
    const vi2 = vector2[index];
    vector[index] = operator(v1i, vi2, type);
  });

  return vector;
};

export const multiplicationScalar = (
  scalar: VectorType,
  vector: VectorsType
): VectorsType => {
  return vector.map(v => v * scalar);
};
export const multiplicationVectors = (
  vector1: VectorsType,
  vector2: VectorsType
): VectorsType => {
  if (vector1.length !== vector2.length) {
    throw new Error(`multiplicationVectors: difference vectors length`);
  }
  return [];
};
