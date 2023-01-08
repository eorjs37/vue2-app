import { _axios } from "@/utils/axios";

const login = (payload) => {
  return _axios.post("/api/ionic/user/login", payload);
};

const ionicMain = () => {
  return _axios.get("/api/ionic/user/test", {});
};

export { login, ionicMain };
