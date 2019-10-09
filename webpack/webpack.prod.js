/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge');
const WorkboxPlugin = require('workbox-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const common = require('./webpack.common.js');

const { API_ENV, FEATURES_ENV } = process.env;
if (!API_ENV) {
  throw new Error('Missing API_ENV env variable!');
}
if (!FEATURES_ENV) {
  throw new Error('Missing FEATURES_ENV env variable!');
}

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[hash].js',
  },
  plugins: [
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      exclude: [/\.map$/, /^manifest.*\.js(?:on)?$/, /\.html$/],
    }),
    new Visualizer(),
    new FaviconsWebpackPlugin(`${__dirname}/../favicon.png`),
  ],
  optimization: {
    // TODO(matt): Verify with Onfido why these non-production optimizations/plugins
    // are needed to avoid a runtime error when using the library
    // See https://github.com/onfido/onfido-sdk-ui/issues/624
    namedModules: true,
    namedChunks: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
});
