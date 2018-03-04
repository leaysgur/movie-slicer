import React from 'react';
import { reaction } from 'mobx';
import { observer } from 'mobx-react';

class SelectorThumb extends React.Component {
  constructor() {
    super();
    this._el = null;
    this._disposer = null;
  }

  render() {
    return (
      <div className="Selector_Thumb" ref={el => this._el = el} />
    );
  }

  componentDidMount() {
    this._disposer = reaction(
      () => [this.props.ui.pxAs1Sec, this.props.movie.bfPath],
      () => this._render(),
      true
    );
  }
  componentWillUnmount() {
    this._disposer();
  }

  _render() {

    const $el = this._el;
    $el.innerHTML = '';
    const thumbHeight = parseInt(getComputedStyle($el).height);

    const { ui, movie } = this.props;
    const timelineWidth = ui.pxAs1Sec * movie.duration;
    // mark as id
    const curSeqId = `${movie.bfPath}x${ui.pxAs1Sec}`;

    const $video = document.createElement('video');
    $video.muted = true;
    $video.src = movie.bfPath;

    // found after 1st canplay fired
    let secPerThumb = 0;

    appendThumb(0);
    function appendThumb(i) {
      $video.addEventListener('canplay', () => {
        const seqId = `${movie.bfPath}x${ui.pxAs1Sec}`;
        // and ignore delayed calls
        if (seqId !== curSeqId) {
          return;
        }

        const $canvas = document.createElement('canvas');
        $canvas.height = thumbHeight;
        $canvas.width = thumbHeight / $video.videoHeight * $video.videoWidth;
        $canvas.getContext('2d').drawImage($video, 0, 0, $canvas.width, $canvas.height);
        $el.appendChild($canvas);

        i++;
        const numOfThumb = timelineWidth / $canvas.width;
        secPerThumb = movie.duration / numOfThumb;
        if (i < numOfThumb) {
          appendThumb(i);
        }
      }, { once: true });

      $video.currentTime = i * secPerThumb;
    }
  }
}

export default observer(SelectorThumb);
