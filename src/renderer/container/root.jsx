import React from 'react';
import { inject, observer } from 'mobx-react';
import Dropzone from 'react-dropzone';

import Player from './player';
import Timeline from './timeline';
import Info from './info';
import Popup from './popup';

const RootContainer = ({ ui, event }) => (
  <Dropzone
    className="L-Root"
    accept="video/*"
    onDropAccepted={files => event.loadFile(files[0])}
    onDropRejected={() => console.log('NO')}
  >
    { ui.route === ui.routes.EDITOR ? (
      <React.Fragment>
        <div className="L-Editor">
          <Player />
          <Timeline />
          <Info />
        </div>
        <Popup />
      </React.Fragment>
    ) : (
      <div>drop here</div>
    ) }
  </Dropzone>
);

export default inject('ui', 'event')(observer(RootContainer));
