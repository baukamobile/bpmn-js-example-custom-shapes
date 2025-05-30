/* eslint-env node */

const CopyPlugin = require('copy-webpack-plugin');

const path = require('path');

const basePath = '.';

const absoluteBasePath = path.resolve(path.join(__dirname, basePath));

module.exports = {
  mode: 'development',
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.bpmn$/,
        type: 'asset/source'
      }
    ]
  },
  resolve: {
    mainFields: [
      'browser',
      'module',
      'main'
    ],
    modules: [
      'node_modules',
      absoluteBasePath
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'app/index.html', to: '.' },
        { from: 'node_modules/bpmn-js/dist/assets', to: 'vendor/bpmn-js/assets' }
      ]
    })
  ]
};