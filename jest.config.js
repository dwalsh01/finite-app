module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleFileExtensions: ["ts", "tsx", "js"],
  modulePathIgnorePatterns: ['<rootDir>/src/tailwind.js'],
};
