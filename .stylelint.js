module.export = {
  extends: ['stylelint-config-standard'],
  rules: {
    // 要求或禁止在注释之前有空行
    'comment-empty-line-before': null,
    // 要求或禁止在声明语句之前有空行
    'declaration-empty-line-before': null,
    // 指定函数名称的大小写
    'function-name-case': 'lower',
    // 禁止低优先级的选择器出现在高优先级的选择器之后
    'no-descending-specificity': null,
    // 禁用 CSS 不支持的双斜线注释
    'no-invalid-double-slash-comments': null,
    // 要求或禁止在 at 规则之前有空行
    'rule-empty-line-before': 'always',
  },
  ignoreFiles: ['node_modules/**/*', 'build/**/*'],
}
