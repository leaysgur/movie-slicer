const { app, BrowserWindow, ipcMain } = require('electron');

const command = require('./commander');
const exec = require('./executer');

let win;
module.exports = function(rootPath) {
  app.on('ready', createWindow);

  app.on('window-all-closed', () => {
    ipcMain.removeAllListeners();
    app.quit();
  });

  app.on('activate', () => {
    if (win === null) {
      createWindow();
    }
  });

  ipcMain.on('cmd:ffmpeg', ({ sender }, arg) => {
    const cmd = command.ffmpeg(arg);
    exec('cmd:ffmpeg', cmd, sender);
  });

  function createWindow() {
    win = new BrowserWindow();
    win.loadURL(`file://${rootPath}/static/index.html`);
    win.maximize();

    win.webContents.openDevTools();

    win.on('closed', () => {
      win = null;
    });
  }
};
