import React from 'react';

import Player from '../container/editor/player';
import Timeline from '../container/editor/timeline';
import Info from '../container/editor/info';
import Popup from '../container/editor/popup';

const EditorPage = () => (
  <React.Fragment>
    <div className="P-Editor">
      <Player />
      <Timeline />
      <Info />
    </div>
    <Popup />
  </React.Fragment>
);

export default EditorPage;
