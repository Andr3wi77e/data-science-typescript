module.exports = {
  moduleNameMapper: {
    '^@math/(.*)$': '<rootDir>/src/_math/$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
};
