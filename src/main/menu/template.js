const { app, shell } = require('electron');

module.exports = function(sender) {
  const menuTemplate = [
    {
      label: app.getName(),
      submenu: [
        {role: 'about'},
        {
          label: 'Preferences...',
          click() { sender.send('shortcut:openSettings'); },
          accelerator: 'CommandOrControl+,',
        },
        {type: 'separator'},
        {role: 'hide'},
        {role: 'hideothers'},
        {role: 'unhide'},
        {type: 'separator'},
        {role: 'quit'}
      ],
    },
    {
      label: 'Action',
      submenu: [
        {
          label: 'Toggle Pause',
          click() { sender.send('shortcut:togglePause'); },
          accelerator: 'Space',
        },
        {type: 'separator'},
        {
          label: 'Clear File',
          click() { sender.send('shortcut:clearFile'); },
          accelerator: 'CommandOrControl+Backspace',
        },
        {type: 'separator'},
        {
          label: 'Save Snapshot',
          click() { sender.send('shortcut:saveSnapshot'); },
          accelerator: 'CommandOrControl+Enter',
        },
        {
          label: 'Save Slice',
          click() { sender.send('shortcut:saveSlice'); },
          accelerator: 'CommandOrControl+Shift+Enter',
        },
      ],
    },
    {
      label: 'View',
      submenu: [
        {role: 'minimize'},
        {role: 'reload'},
        {role: 'close'},
        {type: 'separator'},
        {role: 'toggledevtools'},
      ],
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'GitHub Repo',
          click() { shell.openExternal('https://github.com/leader22/movie-slicer'); }
        },
      ],
    },
  ];

  return menuTemplate;
};
