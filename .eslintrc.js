module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react"],
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "next/core-web-vitals"],

  rules: {
    // Customize your rules here
    "react/react-in-jsx-scope": "off", // Next.js handles this
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-require-imports": "off",
    "react/display-name": "off",
    "no-useless-escape": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
