# WIP

# Tech stack

## Frontend

- React
- Redux
- Styled-components
- Reselect
- Immer
- Dotenv
- Socket.io
- Axios
- Formik

### Changing aliases

Currently there are couple of aliases baked in, such as

- assets
- store
- components
- containers
- utils
- theme
- i18n
- mocks

To change aliases them you need to change

- `jsconfig.json` - for letting **vscode** know the paths
- `.eslintrc.js` - for letting **eslint** know the imports
- `config-overrides.js` - for letting **webpack** know the imports

Project contains following babel plugins

```
"plugins": [
  "@babel/plugin-proposal-export-namespace-from",
  "@babel/plugin-proposal-nullish-coalescing-operator",
  "@babel/plugin-proposal-optional-chaining",
  "babel-plugin-styled-components"
]
```

**ESLint** is used with airbnb config with additional rules

**Formatting on save** is used inside project

### Backend

- Node.js
- Typescript
- Socket.io
- Express
- Axios
- MongoDB
- Passport
- Nodemon
- Mongoose
