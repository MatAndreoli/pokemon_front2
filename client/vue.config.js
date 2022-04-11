const { defineConfig } = require('@vue/cli-service');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new AssetsPlugin({
        filename: '../bff/src/assets.json',
        useCompilerPath: false
      })
    ]
  }
});
