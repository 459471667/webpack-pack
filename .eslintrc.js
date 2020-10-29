module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'eslint-config-prettier',
    'plugin:react/recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'unicorn', 'promise', '@typescript-eslint'],
  rules: {
    'import/extensions': 'off',
    // 箭头函数的参数按需添加括号
    'arrow-parens': ['error', 'as-needed'],
    // require
    '@typescript-eslint/no-var-requires': 0,
    // 有些模块可能已经被 dependencies 里的模块依赖了，但是没出现在 dependencies
    'import/no-extraneous-dependencies': 'off',
    // 禁止定义之前访问变量
    // 警告
    'no-use-before-define': 'warn',
    // 只有 .jsx 文件才能包含 JSX
    'react/jsx-filename-extension': [
      'error',
      {extensions: ['.js', '.jsx', '.ejs', '.ejs', '.ejs', '.tsx']},
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
      typescript: {},
    },
  },
}
