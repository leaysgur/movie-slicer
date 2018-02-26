import React from 'react';

const Video = ({ movie, onLoadedMetadata }) => (
  <video
    className="Video"
    src={movie.path}
    preload="auto"
    controls
    onLoadedMetadata={ev => onLoadedMetadata(ev.target)}
  ></video>
);
export default Video;
