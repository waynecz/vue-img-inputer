module.exports = {
  chainWebpack(config, context) {
    config
      .entry('index')
      .add('./example/index.js')
      .end()
  }
}
