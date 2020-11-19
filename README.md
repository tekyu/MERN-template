# Tech stack

## Frontend
* React
* Redux
* Styled-components
* Reselect
* Immer
* Dotenv
* Socket.io
* Axios
* Formik

### Changing aliases
Currently there are couple of aliases baked in, such as
* assets
* store
* components
* containers
* utils
* theme
* i18n
* mocks

To change aliases them you need to change 
* `jsconfig.json` - for letting __vscode__ know the paths
* `.eslintrc.js` - for letting __eslint__ know the imports
* `config-overrides.js` - for letting __webpack__ know the imports

Project contains following babel plugins
* @babel/plugin-proposal-export-namespace-from,
* @babel/plugin-proposal-nullish-coalescing-operator,
* @babel/plugin-proposal-optional-chaining,
* babel-plugin-styled-components

__ESLint__ is used with airbnb config with additional rules

__Formatting on save__ is used inside project




### Backend
* Node.js
* Typescript
* Socket.io
* Express
* Axios
* MongoDB
* Passport
* Nodemon
* Mongoose
