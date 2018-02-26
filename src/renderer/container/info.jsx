import React from 'react';
import { connect } from 'react-redux';

const InfoContainer = ({ movie }) => (
  <div>
    {movie.currentTime}/{movie.duration}
  </div>
);

const mapStateToProps = state => ({
  movie: state.movie,
});

export default connect(mapStateToProps)(InfoContainer);
