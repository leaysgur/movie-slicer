const { app, BrowserWindow, ipcMain } = require('electron');
const { exec } = require('child_process');

const command = require('./commander');

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
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        return sender.send('cmd:ffmpeg:result', {
          type: 'err',
          payload: err,
        });
      }

      // ffmpeg puts logs to stderr...
      return sender.send('cmd:ffmpeg:result', {
        type: 'ok',
        payload: stderr || stdout,
      });
    });
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
