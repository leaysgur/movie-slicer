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
      const outPath = '/Users/leader22/Desktop/res.mp4';
      const cmd = `ffmpeg -ss ${timeline.selectStartSec} -i ${movie.path} -preset ultrafast -t ${timeline.selectingSec} -r 40 ${outPath}`;
      console.log(cmd);
      // TODO: fix
      ipcRenderer.send('cmd', cmd);
    }}>Exec</button>
  </center>
);

const mapStateToProps = state => ({
  movie: state.movie,
  timeline: state.timeline,
});

export default connect(mapStateToProps)(InfoContainer);
