import React from 'react';
import { connect } from 'react-redux';
import Rnd from 'react-rnd';

import { setVideoCurrentTime } from '../action';

const TimelineContainer = ({
  timelineWidth,
  selectStartX,
  selectorDefaultWidth,
  selectorMaxWidth,
  dispatch,
}) => (
  <div style={{ overflowX: 'auto' }}>
    <div
      style={{
        width: `${timelineWidth}px`, height: '100%', backgroundColor: 'tomato'
      }}
    >
      <Rnd
        default={{ x: selectStartX, y: 0, width: selectorDefaultWidth, }}
        minHeight="100%"
        maxWidth={selectorMaxWidth}
        bounds="parent"
        dragAxis="x"
        style={{ backgroundColor: '#eee' }}
        onDrag={(_ev, data) => {
          dispatch(setVideoCurrentTime(data.x / timelineWidth));
        }}
        onResize={(_ev, dir, ref, _delta, pos) => {
          const posX = dir === 'left' ? pos.x : pos.x + parseInt(ref.style.width);
          dispatch(setVideoCurrentTime(posX / timelineWidth));
        }}
      />
    </div>
  </div>
);

const mapStateToProps = state => ({
  timelineWidth: state.movie.duration * state.timeline.pxAs1Sec,
  selectStartX: state.timeline.pxAs1Sec * state.timeline.selectStartSec,
  selectorDefaultWidth: state.timeline.pxAs1Sec * state.timeline.selectingSec,
  selectorMaxWidth: state.timeline.pxAs1Sec * state.timeline.maxSelectingSec,
});

export default connect(mapStateToProps)(TimelineContainer);
