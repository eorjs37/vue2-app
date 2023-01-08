import Vue from "vue";
import App from "./App.vue";

import VueCarousel from "vue-carousel";
import HeaderComponent from "./components/HeaderComponent";
Vue.config.productionTip = false;
Vue.use(VueCarousel);
Vue.component("Header", HeaderComponent);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
