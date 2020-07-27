module.exports = {
  extends: ['airbnb-base', 'plugin:promise/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: false
    },
    sourceType: 'module'
  },
  env: {
    es6: true,
    node: true,
    jest: true
  },
  plugins: ['import', 'node', 'promise'],
  rules: {
    'object-shorthand': [2, 'always', {ignoreConstructors: true}],
    'no-console': 'off',
    'prefer-const': 'off',
    'object-shorthand': 'off',
    'prefer-rest-params': 'off',
    'arrow-body-style': 'off',
    'no-unused-expressions': 'off',
    'guard-for-in': 'off',
    'no-restricted-globals': 'off',
    'consistent-return': 'off',
    'object-curly-newline': 'off',
    'no-undef': 'off',
    'no-unexpected-multiline': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
        message: 'Unexpected property on console object was called'
      }
    ],
    'arrow-parens': 'off',
    'comma-dangle': ['error', 'only-multiline'],
    complexity: ['error', 10],
    'func-names': 'off',
    'global-require': 'off',

    'handle-callback-err': ['error', '^(err|error)$'],
    'import/no-unresolved': [
      'error',
      {
        caseSensitive: true,
        commonjs: true,
        ignore: ['^[^.]']
      }
    ],
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'no-catch-shadow': 'error',
    'no-continue': 'off',
    'no-div-regex': 'warn',
    'no-else-return': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'no-multi-assign': 'off',
    'no-underscore-dangle': 'off',
    'node/no-deprecated-api': 'error',
    'node/process-exit-as-throw': 'error',
    'object-curly-spacing': ['error', 'never'],
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          ':': 'before',
          '?': 'before'
        }
      }
    ],
    'prefer-arrow-callback': 'off',
    'prefer-destructuring': 'off',
    'prefer-template': 'off',
    'quote-props': [
      1,
      'as-needed',
      {
        unnecessary: true
      }
    ],
    semi: ['error', 'never'],
    'no-await-in-loop': 'off',
    'no-restricted-syntax': 'off',
    'promise/always-return': 'off'
  },
  globals: {
    window: true,
    document: true,
    App: true,
    Page: true,
    Component: true,
    Behavior: true,
    wx: true,
    getCurrentPages: true
  }
}
