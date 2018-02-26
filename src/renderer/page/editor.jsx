import React from 'react';

import Player from '../container/player';
import Timeline from '../container/timeline';
import Info from '../container/info';

const EditorPage = () => (
  <div className="P-Editor">
    <Player />
    <Timeline />
    <div>
      <Info />
      <div>Action</div>
    </div>
  </div>
);

export default EditorPage;
