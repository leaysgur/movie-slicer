import { ipcRenderer } from 'electron';

export function execCommand(name, options) {
  return new Promise((resolve, reject) => {
    ipcRenderer.once(`${name}:result`, (_ev, { type, payload }) => {
      if (type === 'err') {
        return reject(payload);
      }
      resolve(payload);
    });

    ipcRenderer.send(name, options);
  });
}
