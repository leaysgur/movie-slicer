import React from 'react';
import { connect } from 'react-redux';

const EditorPage = ({ movie }) => (
  <div>
    <video src={movie.path} preload="auto"></video>
    <div>Timeline</div>
    <div>
      <div>Info</div>
      <div>Action</div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  movie: state.movie,
});

export default connect(mapStateToProps)(EditorPage);
