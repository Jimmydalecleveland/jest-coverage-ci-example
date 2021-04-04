module.exports = {
  collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 90,
      lines: 90,
      statements: 90,
    },
    "./src/utils": {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
