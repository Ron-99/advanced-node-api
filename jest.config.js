module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['index.ts', 'module-alias.ts'],
  moduleNameMapper: {
    '@/tests/(.+)': '<rootDir>/tests/$1',
    '@/(.+)': '<rootDir>/src/$1'
  },
  roots: [
    '<rootDir>/src',
    '<rootDir>/tests'
  ],
  transform: {
    '\\.ts$': 'ts-jest'
  }
}
