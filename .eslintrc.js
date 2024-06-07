// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended"

  ],
  plugins: ["vuetify"],
  rules: {
    "vuetify/no-deprecated-classes": "error",
    "vue/multi-word-component-names": 0,
    semi: ["error", "always"],
    "vuetify/no-legacy-grid": "error",
    indent: ["error", 2],
  },
};
