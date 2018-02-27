import React from 'react';
import { connect } from 'react-redux';

import Video from '../component/video';
import {
  getVideoDuration,
  getVideoCurrentTime,
} from '../action';

const PlayerContainer = ({ movie, dispatch }) => (
  <Video
    movie={movie}
    onLoadedMetadata={el => dispatch(getVideoDuration(el))}
    onTimeUpdate={el => dispatch(getVideoCurrentTime(el))}
  />
);

const mapStateToProps = state => ({
  movie: state.movie,
});

export default connect(mapStateToProps)(PlayerContainer);
