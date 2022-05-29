import Vector from '@math/_linearAlgebra/Vector';
import type { VectorType } from '@math/_linearAlgebra/Vector';

export type MatrixType = Vector[];

export type IndexType = number;

export type MakeMatrixFnType = (i: IndexType, j: IndexType) => VectorType;

export type MathMatrixType = 'add' | 'subtract';
