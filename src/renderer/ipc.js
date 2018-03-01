import { ipcRenderer } from 'electron';

export default function({ dispatch }) {
  // used as success
  ipcRenderer.on('cmd:ffmpeg:stderr', (_ev, arg) => {
    console.log('stderr');
    console.log(arg);
    dispatch;
  });
  ipcRenderer.on('cmd:ffmpeg:err', (_ev, { cmd }) => {
    console.error('Err! check cmd below');
    console.error(cmd);
  });
}
