import Vector from '@math/_linearAlgebra/Vector/Vector';

const vector1 = [1, 1];
const vector2 = [2, 2];
const vector3 = [2, 2];

const app = () => {
  const Vector1 = new Vector(vector1);
  const Vector2 = new Vector(vector2);
  const Vector3 = new Vector(vector3);

  console.log({ add: Vector1.add(Vector2, Vector3) });
};

export default app;
