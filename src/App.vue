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
import { login } from "@/api/login";
import { App } from "@capacitor/app";
import { SpeechRecognition } from "@capacitor-community/speech-recognition";
import { Device } from "@capacitor/device";
export default {
  name: "App",
  data() {
    return {
      title: "Hello Vue Capacitor",
    };
  },
  created() {
    login({
      UserId: "chleorjs12@gmail.com",
      PassWord: "chleorjs12@",
    });
  },
  async mounted() {
    App.addListener("backButton", () => {
      console.log("backButton");
    });

    const { platform } = await this.getDevice();
    console.log(platform);

    if (platform !== "web") {
      console.log("platform  : ", platform);
      const { permission } = await SpeechRecognition.hasPermission();

      if (permission) {
        SpeechRecognition.start({
          language: "en-US",
          maxResults: 2,
          prompt: "Say something",
          partialResults: true,
          popup: true,
        }).then((value) => {
          console.log("value : ", value);
        });

        setTimeout(() => {
          SpeechRecognition.stop();
        }, 2000);

        SpeechRecognition.addListener("partialResults", (data) => {
          console.log("partialResults was fired", data.matches);
        });
      } else {
        SpeechRecognition.requestPermission()
          .then(
            () => console.log("Granted"),
            () => console.log("Denied")
          )
          .catch((err) => {
            console.error("err : ", err);
          });
      }
    }
  },

  methods: {
    async getDevice() {
      try {
        const info = await Device.getInfo();
        return info;
      } catch (error) {
        console.error("getDevice error : ", error);
        return error;
      }
    },
  },
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
