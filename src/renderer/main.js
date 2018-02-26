import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Root from './page/root';
import reducer from './reducer';

import { loadFile } from './action'; // TODO: debug

window.addEventListener('load', () => {
  const store = createStore(reducer);
  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>,
    document.getElementById('app')
  );

  // TODO: debug
  store.dispatch(loadFile({ path: '/Users/leader22/Sandbox/ffmpeg-test/mov.mp4' }));
});
