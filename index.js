const main = require('./src/main/main');

try {
  require('electron-reloader')(module, {
    ignore: [`${__dirname}/src/renderer`],
  });
} catch (err) {
  err;
}

main(__dirname);
