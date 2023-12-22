/** @type {import("prettier").Config} */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  printWidth: 100,
  semi: true,
  singleQuote: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@/core/(.*)$",
    "^@/system/(.*)$",
    "^@/maocars-client/(.*)$",
    "^@/mocks/(.*)$",
    "^@/shared/(.*)$","^[./]"
  ],
  importOrderSeparation: true,
};

export default config;
