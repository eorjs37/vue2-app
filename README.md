# vue2-app

# jest

## install

```bash
npm install --save-dev jest
```

## 테스트 파일 생성

- 폴더 위치/이름 : src/test

- 파일 이름 : 파일이름.test.js or 파일이름.spec.js

## 테스트 파일 경로 설정

> jest.config.js 생성 후 아래 스크립트 작성

```javascript
//jest.config.js
module.exports = {
  testMatch: ["**/*.spec.[jt]s?(x)", "**/*.test.[jt]s?(x)"],
};
```

## jest 실행

> package.json에 scripts 추가

```json

"scripts": {
    "test": "jest"
}
```

> npm run test 실행
