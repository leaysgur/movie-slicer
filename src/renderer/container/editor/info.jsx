import { ipcRenderer } from 'electron';
import React from 'react';
import { connect } from 'react-redux';

import { Time } from '../../component/editor/formatter';
import { showProgress, showSettings } from '../../action';

const InfoContainer = ({ movie, timeline, settings, dispatch }) => (
  <center>
    Playing: <Time sec={movie.currentTimeDisp} /> / <Time sec={movie.duration} />
    <br />
    Selecting: <Time sec={timeline.selectStartSec} /> - <Time sec={timeline.selectStartSec + timeline.selectingSec} />({timeline.selectingSec}sec)
    <br />
    <button onClick={() => dispatch(showSettings())}
    >Settings</button>
    <button onClick={() => {
      dispatch(showProgress());
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

const mapStateToProps = state => ({
  movie: state.movie,
  timeline: state.timeline,
  settings: state.settings,
});

export default connect(mapStateToProps)(InfoContainer);
