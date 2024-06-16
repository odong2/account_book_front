import Vue from 'vue';
import Vuex from 'vuex';
import menuStore from "./modules/menuStore";
import authStore from "./modules/auth/authStore";

// use는 Vue의 플러그인 기능
// Vue를 사용하는 모든 영역에 특정 기능을 추가
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    menuStore: menuStore,
    authStore: authStore,
  },
});
