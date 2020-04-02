module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    "tw": true
  },
  parser: '@typescript-eslint/parser',
  "parserOptions": {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    "jsx-a11y"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  "rules": {
    "no-plusplus": 0,
    "camelcase": 0,
    "react/jsx-props-no-spreading": 0,
    "import/no-extraneous-dependencies": 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-curly-newline': 0,
    'import/extensions': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/camelcase': 'off',
    "@typescript-eslint/no-explicit-any": 0,
    'no-console': 0
  }
};
