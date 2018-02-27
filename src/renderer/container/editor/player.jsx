import React from 'react';
import { connect } from 'react-redux';

import Video from '../../component/editor/video';
import {
  getVideoDuration,
  getVideoCurrentTime,
} from '../../action';

const PlayerContainer = ({
  movie,
  startTime,
  endTime,
  dispatch,
}) => (
  <Video
    movie={movie}
    startTime={startTime}
    endTime={endTime}
    onLoadedMetadata={el => dispatch(getVideoDuration(el))}
    onTimeUpdate={el => dispatch(getVideoCurrentTime(el))}
  />
);

const mapStateToProps = state => ({
  movie: state.movie,
  startTime: state.timeline.selectStartSec,
  endTime: state.timeline.selectStartSec + state.timeline.selectingSec,
});

export default connect(mapStateToProps)(PlayerContainer);
