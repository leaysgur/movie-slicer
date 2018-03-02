import path from 'path';
import { homedir } from 'os';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import Store from './store';
import Event from './event';
import Root from './container/root';
// import listenIpc from './ipc';

const store = new Store();
const event = new Event(store);
// listenIpc(store);
event.setOutputDir(path.join(homedir(), 'Desktop'));

// TODO: debug
event.standby.loadFile({
  // path: '/Users/leader22/Sandbox/ffmpeg-test/mov.mp4',
  path: '/Users/leader22/Desktop/out.mp4',
  size: 9999
});

window.addEventListener('load', () => {
  ReactDOM.render(
    <Provider
      {...store}
      event={event}
    >
      <Root />
    </Provider>,
    document.getElementById('app')
  );
});
