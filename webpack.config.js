const path = require('path');

const rootPath = path.resolve('');

const config = {
  context: rootPath,
  entry: './src/renderer/main.js',
  output: {
    path: `${rootPath}/static`,
    filename: 'renderer.bundle.js',
  },
};

module.exports = config;
