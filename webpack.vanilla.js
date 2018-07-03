const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'vanilla-js/index.html',
    }),
  ],
}
