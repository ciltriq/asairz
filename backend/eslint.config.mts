import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["**/*.ts"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      // Stop pretending `any` is fine
      "@typescript-eslint/no-explicit-any": "error",

      // You are using TS, not JS
      "no-undef": "off",

      // Noise in Node projects
      "no-console": "off",
    },
  },
];
