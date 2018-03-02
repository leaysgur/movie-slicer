import path from 'path';
import { homedir } from 'os';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import Store from './store';
import Event from './event';
import Root from './container/root';

const store = new Store({
  settings: {
    outputDir: path.join(homedir(), 'Desktop'),
  },
});
const event = new Event(store);

// TODO: debug
window.store = store;
window.event = event;
event.standby.loadFile({
  path: '/Users/leader22/Sandbox/ffmpeg-test/mov.mp4',
  // path: '/Users/leader22/Desktop/out.mp4',
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
