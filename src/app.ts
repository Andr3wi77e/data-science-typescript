import Matrix from '@math/_linearAlgebra/Matrix';
import { MakeMatrixFnType } from '@math/_linearAlgebra/Matrix/types';

const addMakeMatrixFn =
  (expect: number): MakeMatrixFnType =>
  (i, j) =>
    i === j ? expect : 0;

const app = () => {
  console.log({
    e: Matrix.identityMatrix(2, 2).multiplication(2).matrix,
    eq: Matrix.makeMatrix(2, 2, addMakeMatrixFn(2)).matrix,
  });
};

export default app;
