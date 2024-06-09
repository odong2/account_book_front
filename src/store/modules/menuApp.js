const state = {
  navValue: false, // 사이드바 on, off
  gradient: "rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)",
  sideItems: [
    { title: "Calendar", icon: "mdi-calendar-month-outline", to: "/calendar" },
    { title: "Grid System", icon: "mdi-image", to: "/grid-system" },
    { title: "Grid List Page", icon: "mdi-image", to: "/grid-list-page" },
    { title: "Break Points", icon: "mdi-image", to: "/break-point" },
    { title: "Thypography", icon: "mdi-image", to: "/thypography" },
    { title: "TablesVue", icon: "mdi-image", to: "/tables" },
    { title: "로그인", icon: "mdi-image", to: "/authentication/login" },
    { title: "회원가입", icon: "mdi-image", to: "/authentication/sign-up" },
  ],
  menuItems: [
    { title: "회원 아이디", icon: "mdi-account" },
    { title: "이메일", icon: "mdi-email-edit-outline" },
    { title: "버전", icon: "mdi-alert" },
  ],
};

const getters = {
  navValue : (state) => {
    return state.naveValue;
  }
};

const mutations = {
  updateNavValue : (state, newValue) => {
    state.navValue = newValue;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
