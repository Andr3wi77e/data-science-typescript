import Vector from '@math/_linearAlgebra/Vector';
import type { VectorType } from '@math/_linearAlgebra/Vector';
import Matrix from './Matrix';

export type MatrixType = Vector[] | VectorType[][];
export type MatrixValueType = Vector[];
export type MatrixInputType = MatrixType | Matrix;

export type IndexType = number;

export type MakeMatrixFnType = (i: IndexType, j: IndexType) => VectorType;

export type MathMatrixType = 'add' | 'subtract';
