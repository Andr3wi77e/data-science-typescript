import { VectorClass, VectorsType, VectorType } from './types';
import {
  mathVector,
  MathVectorType,
  multiplicationScalar,
  multiplicationVectors,
} from './utils';

class Vector implements VectorClass {
  private vector: VectorsType;

  constructor(vector: VectorsType) {
    this.vector = vector;
  }

  getVector() {
    return this.vector;
  }

  math(type: MathVectorType, vectors: Vector[]): Vector {
    if (vectors.length < 1) {
      return this;
    }

    let newVector: VectorsType = this.vector;

    vectors.forEach(vector => {
      newVector = mathVector(newVector, vector.vector, type);
    });

    this.vector = newVector;

    return new Vector(newVector);
  }

  add(...vectors: Vector[]): Vector {
    return this.math('add', vectors);
  }

  subtract(...vectors: Vector[]): Vector {
    return this.math('subtract', vectors);
  }

  multiplication(...value: (VectorType | Vector)[]): Vector {
    if (value.length === 0) {
      return this;
    }
    let newVector: VectorsType = this.vector;

    value.forEach(vector => {
      if (vector instanceof Vector) {
        newVector = multiplicationVectors(newVector, vector.vector);
      } else {
        newVector = multiplicationScalar(vector, newVector);
      }
    });

    this.vector = newVector;

    return new Vector(newVector);
  }
}

export default Vector;
