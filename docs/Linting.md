# Linting via ESLint

Consistent code styles are strongly enforced via the `.eslintrc` file. My methodology behind it has been to enforce the strictest rules that my sanity will allow, I recommend doing the same. If you have suggestions for more rules, please [open an issue](https://github.com/garetmckinley/inferno-boilerplate/issues/new).

## Running the Linter

_using yarn_

```
$ yarn lint
```

_using npm_

```
$ npm run lint
```

## ESLint Configuration

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "plugins": [
    "eslint-plugin-react"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jquery": true,
    "mocha": true
  },
  "settings": {
    "import/ignore": [
      "node_modules"
    ]
  },
  "globals": {
    "Inferno": true
  },
  "rules": {
    "indent" : ["error", 2],
    "comma-dangle": ["error", "only-multiline"],
    "eol-last": 0,
    "jsx-quotes": ["error", "prefer-single"],
    "block-spacing": ["error", "always"],
    "no-alert": 0,
    "no-console": ["warn"],
    "no-debugger": ["error"],
    "no-lone-blocks": 0,
    "no-trailing-spaces": ["error"],
    "no-underscore-dangle": ["error"],
    "no-unused-vars": ["error", {"varsIgnorePattern": "Inferno"}],
    "no-var": ["error"],
    "object-curly-spacing": ["error", "always"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "react/jsx-space-before-closing": ["error", "never"],
    "react/jsx-curly-spacing": ["error", "always"],
    "react/jsx-uses-vars": 1
  }
}
```
