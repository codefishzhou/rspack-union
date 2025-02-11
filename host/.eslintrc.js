
// import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
module.exports = {
    root: true,
    env: { browser: true, es2021: true },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:vue/vue3-recommended",
      "plugin:eslint-plugin-prettier/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.js", "node_modules"],
    parser: "vue-eslint-parser",
    parserOptions: {
      parser: "@typescript-eslint/parser",
      sourceType: "module",
    },
    rules: {
    },
    // eslintPluginPrettierRecommended
  };