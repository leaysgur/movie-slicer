import React from 'react';

import Player from '../container/player';
import Timeline from '../container/timeline';

const EditorPage = () => (
  <div className="P-Editor">
    <Player />
    <Timeline />
    <div>
      <div>Info</div>
      <div>Action</div>
    </div>
  </div>
);

export default EditorPage;
