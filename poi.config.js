const path = require('path')

module.exports = {
  chainWebpack(config, context) {
    config
      .entry('index')
      .add('./example/index.js')
      .end()
      .output.path(path.resolve(process.cwd(), './demo'))
  }
}
