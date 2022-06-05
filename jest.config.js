module.exports = {
  moduleNameMapper: {
    '^@math/(.*)$': '<rootDir>/src/_math/$1',
    '^@helpers/(.*)$': '<rootDir>/src/_helpers/$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
};
