import { ipcRenderer } from 'electron';
import React from 'react';
import { connect } from 'react-redux';

import { Time } from '../../component/editor/formatter';

const InfoContainer = ({ movie, timeline }) => (
  <center>
    Playing: <Time sec={movie.currentTimeDisp} /> / <Time sec={movie.duration} />
    <br />
    Selecting: <Time sec={timeline.selectStartSec} /> - <Time sec={timeline.selectStartSec + timeline.selectingSec} />({timeline.selectingSec}sec)
    <br />
    <button onClick={() => {
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
