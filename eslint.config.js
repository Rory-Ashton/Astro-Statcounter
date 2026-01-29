// eslint.config.js
import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import astro from "eslint-plugin-astro";

export default [
  js.configs.recommended,

  // TypeScript + JavaScript
  {
    files: ["**/*.{ts,js}"],
    languageOptions: {
      parser,
      ecmaVersion: "latest",
      sourceType: "module",
globals: { ...globals.browser }
    },
    plugins: {
      "@typescript-eslint": ts
    },
    rules: {
      // your TS/JS rules
    }
  },

  // Astro files
  {
    files: ["**/*.astro"],
    plugins: {
      astro
    },
    processor: astro.processors.astro,
    rules: {    "no-unused-vars": ["error", {
      vars: "all",
      args: "after-used",
      ignoreRestSiblings: true
    }]

    }
  }
];

