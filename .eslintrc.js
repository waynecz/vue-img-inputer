module.exports = {
  root: true,
  parser: 'babel-eslint',
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    // allow async-await
    'space-before-function-paren': 'off',
    'generator-star-spacing': 'off',
    'no-undef': 'off'
  }
}
