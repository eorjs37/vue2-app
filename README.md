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

## Jest Api

- describe()
- test()
- expect()
- beforeEach()

### describe()

> 여러개의 test 코드를 하나로 묶고 싶을때 사용되곤한다. test는 api한번 호출될때 사용되고 test를 묶고싶을때는  
> describe()를 사용한다.

### test()

> 한개의 행위에 대해서 작성할때 쓰이곤한다.

### expect()

> 테스트 할 대상을 넣고, 보통 입력값 또는 기대값을 넣는다.

### toBe()

> 입력값에 대한 결과값을 확인 하기 위한 함수이다.

### beforeEach()

> 테스트 파일의 각 테스트가 돌기전에 수행할 로직을 넣는곳
