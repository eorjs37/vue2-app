module.exports = {
  //테스트 코드 파일찾아서 테스트 실행
  testMatch: ["**/*.spec.[jt]s?(x)", "**/*.test.[jt]s?(x)"],
  transform: {
    // `vue-jest`를 사용하여 모든 vue 파일(`*.vue`)을 처리합니다
    ".*\\.(vue)$": "vue-jest",
    // `babel-jest`를 사용하여 모든 js 파일(`*.js`)을 처리합니다
    ".*\\.(js)$": "babel-jest",
  },
  // 별칭 @(프로젝트/src) 사용하여 하위 경로의 파일을 맵핑합니다
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // node_modules 경로 하위에 있는 모든 테스트 파일을 대상에서 제외합니다
  testPathIgnorePatterns: ["/node_modules/"],
  //코드 커버리지(Code Coverage)
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{vue}", "!**/node_modules/**"],
};
