import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  // 오버라이드하여 색상 변경 가능
  themes: {
    light: {
      primary: "#1976D2",
      secondary: "#424242",
      accent: "#82B1FF",
      error: "#FF5252",
      info: "#2196F3",
      success: "#4CAF50",
      warning: "#FB8C00",
      light: "#F5440"
    },
    dark: {
      primary: "#2196F3",
      secondary: "#424242",
      accent: "#FF4081",
      error: "#FF5252",
      info: "#2196F3",
      success: "#4CAF50",
      warning: "#FB8C00",
    },
  },
});
