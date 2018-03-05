const path = require('path');
const webpack = require('webpack');

const rootPath = path.resolve('');

const config = {
  context: rootPath,
  entry: './src/renderer/main.js',
  target: 'electron-renderer',
  output: {
    path: `${rootPath}/static`,
    filename: 'renderer.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({}),
  ],
};

module.exports = config;
