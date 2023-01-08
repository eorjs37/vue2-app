import { _axios } from "@/utils/axios";

const login = (payload) => {
  return _axios.post("/api/ionic/user/login", payload);
};

export { login };
