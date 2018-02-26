import React from 'react';
import { connect } from 'react-redux';

import Video from '../component/video';
import { getVideoDuration } from '../action';

const PlayerContainer = ({ movie, onVideoMetadataLoaded }) => (
  <Video
    movie={movie}
    onLoadedMetadata={onVideoMetadataLoaded}
  />
);

const mapStateToProps = state => ({
  movie: state.movie,
});

const mapDispatchToProps = dispatch => ({
  onVideoMetadataLoaded($video) {
    dispatch(getVideoDuration($video));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
