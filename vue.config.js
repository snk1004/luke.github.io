module.exports = {
  publicPath: "./",
  outputDir: "pages",
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
  devServer: {
    port: 8010
  }
}