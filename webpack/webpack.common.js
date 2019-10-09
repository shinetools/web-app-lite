/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const { API_ENV, FEATURES_ENV } = process.env;

module.exports = {
  entry: ['@babel/polyfill', './src/index.tsx'],
  target: 'web',
  output: {
    filename: '[name].js',
    path: `${__dirname}/../dist/static`,
    publicPath: '/',
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.mjs', '.ts', '.tsx', '.js', '.json'],
    plugins: [new TsconfigPathsPlugin()],
    alias: {
      config: path.resolve(__dirname, '..', 'config'),
      featureFlags: path.resolve(__dirname, '..', 'featureFlags'),
      'react-native': 'react-native-web',
      'styled-components/native': path.resolve(
        __dirname,
        '..',
        'node_modules',
        'styled-components',
      ),
      'lottie-web': path.join(
        __dirname,
        '..',
        'node_modules',
        'lottie-web',
        'build',
        'player',
        'lottie_light.js',
      ),
    },
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {
        test: /^(?!.*\.test\.[tj]sx?$).*\.[tj]sx?$/,
        use: 'babel-loader',
        include: [
          path.join(__dirname, '..', 'src'),
          path.join(__dirname, '..', 'node_modules', '@shinetools', 'sunbeams'),
          path.join(__dirname, '..', 'node_modules', 'react-native-progress'),
          path.join(__dirname, '..', 'node_modules', 'react-select'),
          path.join(
            __dirname,
            '..',
            'node_modules',
            'react-native-parsed-text',
          ),
        ],
      },
      // CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Images
      {
        test: /\.(pdf|png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Shine | App',
      template: './src/index.html',
    }),
    new WebpackPwaManifest({
      short_name: 'Shine',
      name: 'Shine | Le copilote des indépendants',
      description: 'My awesome Progressive Web App!',
      start_url: '/',
      theme_color: '#ffd947',
      background_color: '#ffd947',
      crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
        },
      ],
    }),
    new CopyPlugin([{ from: './static', to: '.' }]),
    new webpack.DefinePlugin({
      'process.env.API_ENV': JSON.stringify(API_ENV || 'development'),
      'process.env.FEATURES_ENV': JSON.stringify(FEATURES_ENV || 'development'),
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /fr|en/),
  ],
  optimization: {
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
};
