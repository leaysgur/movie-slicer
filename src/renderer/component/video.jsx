import React from 'react';

class Video extends React.Component {
  constructor() {
    super();
    this._el = null;
  }

  render() {
    const { movie, onLoadedMetadata } = this.props;
    return (
      <video
        ref={el => this._el = el}
        className="Video"
        src={movie.path}
        preload="auto"
        onLoadedMetadata={ev => onLoadedMetadata(ev.target)}
      ></video>
    );
  }

  shouldComponentUpdate(nextProps) {
    // render only path changed(= for the first time)
    if (nextProps.movie.path === this.props.movie.path) {
      return false;
    }
    return true;
  }

  componentWillReceiveProps(nextProps) {
    if (!this._el) {
      return;
    }

    const { currentTime } = nextProps.movie;
    if (currentTime !== this.props.movie.currentTime) {
      this._el.currentTime = currentTime;
    }
  }
}

export default Video;
