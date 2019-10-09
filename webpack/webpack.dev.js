/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[hash].js',
    path: `${__dirname}/../dist/static`,
    publicPath: '/',
  },
  devServer: {
    port: 5413,
    hot: true,
    overlay: true,
    contentBase: './dist',
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});
