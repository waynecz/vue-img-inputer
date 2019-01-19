const copy = require('rollup-plugin-copied')

module.exports = {
  plugins: [
    'vue',

    copy([
      {
        from: './src/style/fonts',
        to: './dist/fonts',
        emitFiles: true
      }
    ])
  ],

  format: ['cjs', 'umd', 'es'],
  filename: 'index[suffix].js'
}
