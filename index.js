const path = require('path');

const main = require('./src/main/main');

const rootPath = path.resolve('');

try {
  require('electron-reloader')(module, {
    ignore: [`${rootPath}/src/renderer`],
  });
} catch (err) {
  err;
}

main(rootPath);
