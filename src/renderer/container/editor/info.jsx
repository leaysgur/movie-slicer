import { ipcRenderer } from 'electron';
import React from 'react';
import { inject, observer } from 'mobx-react';

import { Time } from '../../component/editor/formatter';

const InfoContainer = ({ movie, timeline, settings, event }) => (
  <center>
    Playing: <Time sec={movie.currentTimeDisp} /> / <Time sec={movie.duration} />
    <br />
    Selecting: <Time sec={timeline.selectStartSec} /> - <Time sec={timeline.selectStartSec + timeline.selectingSec} />({timeline.selectingSec}sec)
    <br />
    <button onClick={() => event.editor.showSettings()}
    >Settings</button>
    <button onClick={() => {
      event.editor.showProgress();
      // TODO: move to event
      ipcRenderer.send('cmd:ffmpeg', {
        startSec: timeline.selectStartSec,
        input: movie.path,
        time: timeline.selectingSec,
        frameRate: settings.frameRate,
        outputDir: settings.outputDir,
        preset: settings.preset,
      });
    }}>Exec</button>
  </center>
);

export default inject('event', 'timeline', 'movie', 'settings')(observer(InfoContainer));
