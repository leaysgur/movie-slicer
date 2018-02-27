import React from 'react';
import { connect } from 'react-redux';

const InfoContainer = ({ movie, timeline }) => (
  <div>
    Playing: {movie.currentTimeDisp}/{movie.duration}sec | Selecting: {timeline.selectStartSec}-{timeline.selectingSec}sec
  </div>
);

const mapStateToProps = state => ({
  movie: state.movie,
  timeline: state.timeline,
});

export default connect(mapStateToProps)(InfoContainer);
