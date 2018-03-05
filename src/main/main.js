const { app, BrowserWindow, ipcMain } = require('electron');
require('fix-path')();

const command = require('./commander');
const execute = require('./executer');

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
    execute.ffmpeg('cmd:ffmpeg', cmd, sender);
  });
  ipcMain.on('cmd:ffprobe', ({ sender }, arg) => {
    const cmd = command.ffprobe(arg);
    execute.ffmpeg('cmd:ffprobe', cmd, sender);
  });

  function createWindow() {
    win = new BrowserWindow();
    win.loadURL(`file://${rootPath}/static/index.html`);
    win.maximize();

    if (process.env.NODE_ENV === 'development') {
      win.webContents.openDevTools();
    }

    win.on('closed', () => {
      win = null;
    });
  }
};
