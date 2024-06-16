import { apiRequest } from "@/apis/auth/authApi.js";

const storage = {
  fetch() {
    let signupUser = JSON.parse(localStorage.getItem("signupUser"));
    return signupUser;
  },
};


const state = {
  signupUser: storage.fetch(),
};

const getters = {
  getSignupUser: state => state.signupUser,

};

const mutations = {
  // 회원가입 전송
  submitForm: (state, formData) => {
    apiRequest.signup(formData);
    return state;
  },
  // 카카오 로그인
  loginFromKakao: (state, code) => {
    apiRequest.loginFromKakao(code);
  }
};



export default {
  namespaced: true,
  state,
  getters,
  mutations,
};

