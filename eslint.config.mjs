import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
  // Shared settings
  {
    ignores: ["node_modules/", "db/"],
  },

  // ES Modules config (.mjs files)
  {
    files: ["**/*.mjs"],
    languageOptions: {
      sourceType: "module",
      globals: globals.node,
    },
    rules: {
      ...js.configs.recommended.rules,
      "capitalized-comments": [
        "error",
        "always",
        {
          ignorePattern: "pragma|ignored",
          ignoreInlineComments: true,
        },
      ],
    },
  },

  // CommonJS config (.js and .cjs files)
  {
    files: ["**/*.js", "**/*.cjs"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": ["error", { argsIgnorePattern: "_" }],
    },
  },
  eslintPluginPrettierRecommended,
]);
