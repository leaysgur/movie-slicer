import React from 'react';
import { connect } from 'react-redux';
import Rnd from 'react-rnd';

import {
  setVideoCurrentTime,
  setSelectStartSec,
  setSelectEndSec,
} from '../action';

const TimelineContainer = ({
  timelineWidth,
  selectStartX,
  selectorDefaultWidth,
  selectorMinWidth,
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
        minWidth={selectorMinWidth}
        maxWidth={selectorMaxWidth}
        bounds="parent"
        dragAxis="x"
        style={{ backgroundColor: '#eee' }}
        onDrag={(_ev, data) => {
          dispatch(setVideoCurrentTime(data.x / timelineWidth));
          dispatch(setSelectStartSec(data.x / timelineWidth));
        }}
        onResize={(_ev, dir, ref, _delta, pos) => {
          if (dir === 'left') {
            dispatch(setVideoCurrentTime(pos.x / timelineWidth));
            dispatch(setSelectStartSec(pos.x / timelineWidth));
            dispatch(setSelectEndSec((pos.x + parseInt(ref.style.width)) / timelineWidth));
          }
          if (dir === 'right') {
            dispatch(setVideoCurrentTime((pos.x + parseInt(ref.style.width)) / timelineWidth));
            dispatch(setSelectEndSec((pos.x + parseInt(ref.style.width)) / timelineWidth));
          }
        }}
      />
    </div>
  </div>
);

const mapStateToProps = state => ({
  timelineWidth: state.timeline.pxAs1Sec * state.movie.duration,
  selectStartX: state.timeline.pxAs1Sec * state.timeline.selectStartSec,
  selectorDefaultWidth: state.timeline.pxAs1Sec * state.timeline.selectingSec,
  selectorMinWidth: state.timeline.pxAs1Sec * state.timeline.minSelectingSec,
  selectorMaxWidth: state.timeline.pxAs1Sec * state.timeline.maxSelectingSec,
});

export default connect(mapStateToProps)(TimelineContainer);
