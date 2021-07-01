module.exports = {
  ignorePatterns: ["./node_modules", "./.next"],
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next",
    // "next/core-web-vitals",
    "plugin:react/recommended",
    "google",
    "prettier",
    // "plugin:tailwindcss/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "tailwindcss"],
  rules: {
    // disables js doc
    "require-jsdoc": 0,
    // disables react imports
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
    "tailwindcss/classnames-order": "warn",
    // "tailwindcss/no-custom-classname": "warn",
    "tailwindcss/no-contradicting-classname": "error",
  },
  settings: {
    react: {
      version: "latest",
    },
  },
};
