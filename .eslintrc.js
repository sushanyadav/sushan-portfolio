module.exports = {
  ignorePatterns: ["./node_modules", "./.next"],
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next",
    "next/core-web-vitals",
    "plugin:react/recommended",
    "google",
    "plugin:prettier/recommended",
    // "plugin:tailwindcss/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "tailwindcss"],
  rules: {
    "no-console": ["warn", { allow: ["warn"] }],
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
    "tailwindcss/no-contradicting-classname": "warn",

    //* prettier config
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
        singleQuote: false,
        printWidth: 80,
        tabWidth: 2,
        trailingComma: "es5",
      },
    ],
  },
  settings: {
    react: {
      version: "latest",
    },
  },
};
