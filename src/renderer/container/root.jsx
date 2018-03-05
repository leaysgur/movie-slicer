import React from 'react';
import { inject, observer } from 'mobx-react';
import Dropzone from 'react-dropzone';

import Player from './player';
import Timeline from './timeline';
import Info from './info';
import Popup from './popup';
import Icon from '../component/icon';

const RootContainer = ({ movie, event }) => (
  <Dropzone
    className="L-Root"
    disableClick
    accept="video/*"
    onDropAccepted={files => event.loadFile(files[0])}
  >
    { movie.hasBfFile ? (
      <React.Fragment>
        <div className="L-Editor">
          <Player />
          <Timeline />
          <Info />
        </div>
        <Popup />
      </React.Fragment>
    ) : (
      <div className="L-Dropper">
        <p>
          Drop your video!
        </p>
        <div>
          <Icon name="file_upload" size="l" />
        </div>
      </div>
    ) }
  </Dropzone>
);

export default inject('movie', 'event')(observer(RootContainer));
