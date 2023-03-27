module.exports = {
    preset: 'jest-preset-angular',
    roots: ['src'],
    testMatch: ['**/+(*.)+(spec).+(ts)'],
    setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
    moduleNameMapper: {
      '@app/(.*)': '<rootDir>/src/app/$1',
    },
    transformIgnorePatterns: ['node_modules/(?!(jest-test))'],
  };
  