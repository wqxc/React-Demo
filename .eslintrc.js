module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["standard", "eslint:recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["standard", "react"],
  rules: {
    "no-console": "warn",
    "no-undef": "off"
    // "jsx-a11y/rule-name": 2
  }
};
