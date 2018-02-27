import React from 'react';
import { connect } from 'react-redux';
import Rnd from 'react-rnd';

import { setCurrentTime } from '../action';

const TimelineContainer = ({
  timelineWidth,
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
        default={{ x: 0, y: 0, width: selectorDefaultWidth, }}
        minHeight="100%"
        maxWidth={selectorMaxWidth}
        bounds="parent"
        dragAxis="x"
        style={{ backgroundColor: '#eee' }}
        onDrag={(_ev, data) => {
          dispatch(setCurrentTime(data.x / timelineWidth));
        }}
        onResize={(_ev, dir, ref, _delta, pos) => {
          const posX = dir === 'left' ? pos.x : pos.x + parseInt(ref.style.width);
          dispatch(setCurrentTime(posX / timelineWidth));
        }}
      />
    </div>
  </div>
);

const mapStateToProps = state => ({
  timelineWidth: state.movie.duration * state.timeline.pxAs1Sec,
  selectorDefaultWidth: state.timeline.pxAs1Sec * state.timeline.selectingSec,
  selectorMaxWidth: state.timeline.pxAs1Sec * state.timeline.maxSelectingSec,
});

export default connect(mapStateToProps)(TimelineContainer);
