import Vue from 'vue';
import Vuex from 'vuex';
import menuApp from './modules/menuApp';
import authApp from './modules/auth/authApp';

// use는 Vue의 플러그인 기능
// Vue를 사용하는 모든 영역에 특정 기능을 추가
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    API_URL: process.env.VUE_APP_API_URL,
    HOST_URL: process.env.VUE_APP_HOST_URL,
  },
  getters: {},
  modules: {
    menuApp: menuApp,
    authApp: authApp,
  },
});
