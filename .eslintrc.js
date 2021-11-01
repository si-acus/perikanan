module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  rules: {
    eqeqeq: [2, 'always'],
    indent: [2, 2, { SwitchCase: 1 }],
    'jsx-quotes': 2,
    'max-len': [2, { code: 100, ignoreStrings: true }],
    'max-lines': [2, { max: 300, skipBlankLines: true, skipComments: true }],
    'no-console': 2,
    'no-debugger': 2,
    'no-var': 2,
    'object-curly-spacing': [2, 'always', { arraysInObjects: false }],
    quotes: [2, 'single', { allowTemplateLiterals: true }],
    semi: [2, 'always'],
    'react/display-name': [2, { ignoreTranspilerName: false }],
    'react/default-props-match-prop-types': 2,
    'react/no-danger': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-unknown-property': 2,
    'react/no-unused-state': 2,
    'react/prefer-es6-class': 2,
    'react/self-closing-comp': 2,
    'react/jsx-curly-spacing': 2,
    'react/jsx-key': 2,
    'react/jsx-max-depth': [2, { max: 7 }],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': 2,
    'import/extensions': 2,
  },
  overrides: [
    {
      files: ['!styles.js'],
      rules: {
        'sort-keys': 0,
      },
    },
  ],
  globals: {},
  settings: {
    react: {
      version: 'detect'
    }
  }
};
