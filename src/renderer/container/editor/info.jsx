import React from 'react';
import { connect } from 'react-redux';

import { Time } from '../../component/editor/formatter';

const InfoContainer = ({ movie, timeline }) => (
  <div>
    Playing: <Time sec={movie.currentTimeDisp} /> / <Time sec={movie.duration} />
    {' | '}
    Selecting: <Time sec={timeline.selectStartSec} /> - <Time sec={timeline.selectStartSec + timeline.selectingSec} />({timeline.selectingSec}sec)
  </div>
);

const mapStateToProps = state => ({
  movie: state.movie,
  timeline: state.timeline,
});

export default connect(mapStateToProps)(InfoContainer);
