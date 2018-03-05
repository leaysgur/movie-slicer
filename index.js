const main = require('./src/main/main');

if (process.env.NODE_ENV === 'development') {
  try {
    require('electron-reloader')(module, {
      ignore: [`${__dirname}/src/renderer`],
    });
  } catch (err) {
    err;
  }
}

main(__dirname);
