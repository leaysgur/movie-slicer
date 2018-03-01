import { ipcRenderer } from 'electron';
import React from 'react';
import { connect } from 'react-redux';

import { Time } from '../../component/editor/formatter';
import { showProgress } from '../../action';

const InfoContainer = ({ movie, timeline, dispatch }) => (
  <center>
    Playing: <Time sec={movie.currentTimeDisp} /> / <Time sec={movie.duration} />
    <br />
    Selecting: <Time sec={timeline.selectStartSec} /> - <Time sec={timeline.selectStartSec + timeline.selectingSec} />({timeline.selectingSec}sec)
    <br />
    <button>Settings</button>
    <button onClick={() => {
      dispatch(showProgress());
      ipcRenderer.send('cmd:ffmpeg', {
        startSec: timeline.selectStartSec,
        input: movie.path,
        time: timeline.selectingSec,
      });
    }}>Exec</button>
  </center>
);

const mapStateToProps = state => ({
  movie: state.movie,
  timeline: state.timeline,
});

export default connect(mapStateToProps)(InfoContainer);
