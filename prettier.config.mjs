/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx', 'cn', 'cva', 'twMerge'],

  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 80,
}

export default config
