module.exports = {
  testMatch: ["**/*.spec.[jt]s?(x)", "**/*.test.[jt]s?(x)"],
  moduleNameMapper: {
    // 별칭 @(프로젝트/src) 사용하여 하위 경로의 파일을 맵핑합니다
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // collectCoverage: true,
  // collectCoverageFrom: ["**/*.{js,vue}", "!**/node_modules/**"],
};
