import React from 'react';

import Player from '../container/editor/player';
import Timeline from '../container/editor/timeline';
import Info from '../container/editor/info';

const EditorPage = () => (
  <div className="P-Editor">
    <Player />
    <Info />
    <Timeline />
    <div>Action</div>
  </div>
);

export default EditorPage;
