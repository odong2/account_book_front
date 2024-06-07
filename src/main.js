import Vue from "vue";
import App from "./App.vue";
// import store from "./store/store";
// bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Font Awesome 라이브러리 임포트
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
// vuetify
import vuetify from "./plugins/vuetify";
//router
import router from "./router";

Vue.config.productionTip = false;

// 부트스트랩 사용 설정
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// FontAwesome 컴포넌트를 글로벌 컴포넌트로 등록
Vue.component("FontAwesomeIcon", FontAwesomeIcon);

library.add(fas, far, fab);

new Vue({
  vuetify,
  router,
  // store, // 축약 속성 store : store
  render: (h) => h(App),
}).$mount("#app");
