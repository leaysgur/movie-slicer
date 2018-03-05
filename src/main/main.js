const { app, BrowserWindow, ipcMain, Menu } = require('electron');
require('fix-path')();

const menuTemplate = require('./menu/template');
const command = require('./external/commander');
const execute = require('./external/executer');

let win;
module.exports = function(rootPath) {
  app.on('ready', createWindow);

  app.on('window-all-closed', () => {
    ipcMain.removeAllListeners('cmd:ffmpeg-slice');
    ipcMain.removeAllListeners('cmd:ffmpeg-snap');
    ipcMain.removeAllListeners('cmd:ffprobe');
    app.quit();
  });

  app.on('activate', () => {
    if (win === null) {
      createWindow();
    }
  });

  ipcMain.on('cmd:ffmpeg-slice', ({ sender }, arg) => {
    const cmd = command.ffmpegSlice(arg);
    execute.ffmpeg('cmd:ffmpeg-slice', cmd, sender);
  });
  ipcMain.on('cmd:ffmpeg-snap', ({ sender }, arg) => {
    const cmd = command.ffmpegSnap(arg);
    execute.ffmpeg('cmd:ffmpeg-snap', cmd, sender);
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

    const menu = Menu.buildFromTemplate(menuTemplate(win.webContents));
    Menu.setApplicationMenu(menu);

    win.on('closed', () => {
      win = null;
    });
  }
};
