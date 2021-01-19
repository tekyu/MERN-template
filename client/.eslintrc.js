module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  plugins: [`jsx-a11y`, `prettier`, `react`, `react-hooks`],
  extends: [
    `airbnb`,
    `plugin:react/recommended`,
    `plugin:jsx-a11y/recommended`,
    `plugin:react-hooks/recommended`,
    `prettier`,
  ],
  parser: `babel-eslint`,
  parserOptions: {
    ecmaVersion: 2019,
  },
  rules: {
    quotes: [2, `backtick`],
    "import/prefer-default-export": 0,
    "import/no-cycle": 1,
    "no-unused-vars": 1,
    "no-console": 1,
    "no-shadow": 0,
    "arrow-parens": [2, `as-needed`],
    "jsx-a11y/label-has-for": [
      0,
      {
        components: [`Label`],
        required: {
          every: [`nesting`, `id`],
        },
        allowChildren: false,
      },
    ],
    "react/prop-types": 1,
    "react/jsx-key": 1,
    "class-methods-use-this": 0,
    "react-hooks/rules-of-hooks": `error`,
    "react-hooks/exhaustive-deps": `error`,
    "no-param-reassign": [
      `error`,
      { props: true, ignorePropertyModificationsFor: [`draft`] },
    ],
    "react/jsx-filename-extension": [
      2,
      { extensions: [`.js`, `.jsx`, `.ts`, `.tsx`] },
    ],
    "import/extensions": [
      `error`,
      `ignorePackages`,
      {
        "js": `never`,
        "jsx": `never`,
        "ts": `never`,
        "tsx": `never`
      }
   ]
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [
          [`root`, `./src`],
          [`assets`, `./src/assets`],
          [`store`, `./src/store`],
          [`components`, `./src/components`],
          [`containers`, `./src/containers`],
          [`utils`, `./src/utils`],
          [`theme`, `../src/theme`],
          [`i18n`, `./src/i18n`],
          [`mocks`, `./src/mocks`],
        ],
        extensions: [`.ts`, `.tsx`, `.js`, `.jsx`, `.json`],
      },
    },
  },
};
