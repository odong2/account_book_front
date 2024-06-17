import { apiRequest } from "@/apis/auth/authApi.js";
import { Constant } from "@/constants/constant.js";

const storage = {
  fetch() {
    let signupUser = JSON.parse(localStorage.getItem("signupUser"));
    return signupUser;
  },
};


const state = {
  constants: Constant,
  // (소셜) 회원가입 유저 정보
  signupUser: storage.fetch(),
  // 소셔 폼 데이터
  socialFormData: {
    name: "",
    nickname: "",
    email: "",
    id: "",
    provider: "",
    profileImage: "",
  },
};

const getters = {
  getSignupUser: state => state.signupUser,
  getSocialFromData: state => state.socialFormData
};

const mutations = {
  // 소셜 회원가입 전송
  socialSignUp: (state) => {
    apiRequest.socialSignup(state.socialFormData);
    return state;
  },
  // 카카오 로그인
  loginFromKakao: (state, code) => {
    apiRequest.loginFromKakao(code);
  },
  // 소셜 회원가입 폼 데이터 변경(@input 동작)
  updateSocialFormData: (state, {key, value}) => {
    state.socialFormData[key] = value;
  },
  // 소셜 회원가입 폼 초기화
  setSocialFormData: (state, formData) => {
    state.socialFormData = {...formData};
  }
};



export default {
  namespaced: true,
  state,
  getters,
  mutations,
};

