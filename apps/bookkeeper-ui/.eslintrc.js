module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ["@nuxtjs/eslint-config-typescript", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"],
  },
};
