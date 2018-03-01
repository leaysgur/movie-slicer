import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Root from './container/root';
import reducer from './reducer';
import listenIpc from './ipc';

import { loadFile } from './action'; // TODO: debug

const store = createStore(reducer);
listenIpc(store);

// TODO: debug
store.dispatch(loadFile({ path: '/Users/leader22/Sandbox/ffmpeg-test/mov.mp4', size: 9999 }));
// store.dispatch(loadFile({ path: '/Users/leader22/Desktop/out.mp4', size: 9999 }));

window.addEventListener('load', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>,
    document.getElementById('app')
  );
});
