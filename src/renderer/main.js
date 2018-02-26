import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Root from './page/root';
import reducer from './reducer';

window.addEventListener('load', () => {
  const store = createStore(reducer);
  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>,
    document.getElementById('app')
  );
});
