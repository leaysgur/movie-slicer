import React from 'react';

class Video extends React.Component {
  constructor() {
    super();
    this._el = null;
  }

  render() {
    const { movie, onLoadedMetadata, onTimeUpdate } = this.props;
    return (
      <video
        ref={el => this._el = el}
        className="Video"
        src={movie.path}
        autoPlay
        onLoadedMetadata={ev => onLoadedMetadata(ev.target)}
        onTimeUpdate={ev => onTimeUpdate(ev.target)}
        onClick={() => this._onClick()}
      ></video>
    );
  }

  shouldComponentUpdate(nextProps) {
    // render only path changed(= for the first time)
    // after that, just mutate properties
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

  _onClick() {
    this._el.paused ? this._el.play() : this._el.pause();
  }
}

export default Video;
