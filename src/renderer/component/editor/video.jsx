import React from 'react';
import { reaction } from 'mobx';
import { observer } from 'mobx-react';

class Video extends React.Component {
  constructor() {
    super();
    this._el = null;
    this._disposer = null;
  }

  render() {
    const { movie, onLoadedMetadata } = this.props;
    return (
      <video
        ref={el => this._el = el}
        className="Video"
        src={movie.path}
        autoPlay
        muted
        onLoadedMetadata={ev => onLoadedMetadata(ev.target)}
        onTimeUpdate={ev => this._onTimeUpdate(ev.target)}
        onClick={() => this._onClick()}
      ></video>
    );
  }

  componentDidMount() {
    this._disposer = reaction(
      () => this.props.movie.currentTime,
      time => this._el.currentTime = time
    );
  }
  componentWillUnmount() {
    this._disposer();
  }

  _onClick() {
    this._el.paused ? this._el.play() : this._el.pause();
  }
  _onTimeUpdate(el) {
    const { onTimeUpdate, timeline } = this.props;

    onTimeUpdate(el);
    if (el.currentTime > timeline.selectEndSec) {
      el.currentTime = timeline.selectStartSec;
    }
  }
}

export default observer(Video);
