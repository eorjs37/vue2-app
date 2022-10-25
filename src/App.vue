<template>
  <div id="app">
    <div class="container">
      <div class="login-box">
        <div class="form-group">
          <label for="id">ID</label>
          <input type="text" placeholder="아이디를 입력하세요" />
        </div>
        <div class="form-group">
          <label for="id">PASSWORD</label>
          <input type="password" placeholder="아이디를 입력하세요" />
        </div>
        <div class="login-button">
          <button type="button">로그인</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ionicMain } from "@/api/login";
export default {
  name: "App",
  data() {
    return {
      title: "Hello Vue Capacitor",
    };
  },
  methods: {
    ionicMain() {
      ionicMain()
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status >= 500) {
              alert("서버에서 에러가 발생하였습니다.");
            } else {
              alert("요청이 잘못되었습니다.");
            }
          } else if (error.request) {
            console.log(error.request);
            alert(error.request);
          } else {
            console.log(error.message);
            alert(error.message);
          }
        });
    },
  },
  created() {
    this.ionicMain();
  },
  mounted() {},
};
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-box {
  width: 300px;
  height: 300px;
  border: 1px solid #000;
  border-radius: 10px;
}

.form-group {
  padding: 0.8em;
}

label {
  display: inline-block;
  margin-right: 10px;
  width: 80px;
}

.login-button {
  padding: 0.8em;
  text-align: right;
}
</style>
