import React from 'react';
import { connect } from 'react-redux';

import Video from '../component/video';
import { getVideoDuration } from '../action';

const EditorPage = ({ movie, onVideoMetadataLoaded }) => (
  <div className="P-Editor">
    <Video
      movie={movie}
      onLoadedMetadata={onVideoMetadataLoaded}
    />
    <div>Timeline</div>
    <div>
      <div>
        Info
        <p>Duraion: {movie.duration}</p>
      </div>
      <div>Action</div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  movie: state.movie,
});

const mapDispatchToProps = dispatch => ({
  onVideoMetadataLoaded($video) {
    dispatch(getVideoDuration($video));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorPage);
