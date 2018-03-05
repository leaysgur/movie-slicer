import React from 'react';
import { reaction } from 'mobx';
import { observer } from 'mobx-react';

class Video extends React.Component {
  constructor() {
    super();
    this._el = null;
    this._disposers = [];
  }

  render() {
    const { movie } = this.props;
    return (
      <video
        ref={el => this._el = el}
        className="Video"
        src={movie.bfPath}
        muted={movie.isMuted}
        onTimeUpdate={ev => this._onTimeUpdate(ev.target)}
      ></video>
    );
  }

  componentDidMount() {
    this._disposers = [
      reaction(
        () => this.props.movie.currentTime,
        time => this._el.currentTime = time,
        true
      ),
      reaction(
        () => this.props.movie.isPaused,
        isPaused => isPaused ? this._el.pause() : this._el.play(),
        true
      ),
    ];
  }
  componentWillUnmount() {
    this._disposers.forEach(dispose => dispose());
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
