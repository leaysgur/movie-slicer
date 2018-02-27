import React from 'react';
import { connect } from 'react-redux';

import Timeline from '../../component/editor/timeline';
import Selector from '../../component/editor/selector';

import {
  setVideoCurrentTime,
  setSelectStartSec,
  setSelectEndSec,
} from '../../action';

const TimelineContainer = ({
  timelineWidth,
  selectStartX,
  selectorDefaultWidth,
  selectorMinWidth,
  selectorMaxWidth,
  dispatch,
}) => (
  <Timeline>
    <Selector
      {...{
        timelineWidth,
        selectStartX,
        selectorDefaultWidth,
        selectorMinWidth,
        selectorMaxWidth,
        onDrag(data) {
          dispatch(setVideoCurrentTime(data.x / timelineWidth));
          dispatch(setSelectStartSec(data.x / timelineWidth));
        },
        onResize(dir, ref, pos) {
          if (dir === 'left') {
            dispatch(setVideoCurrentTime(pos.x / timelineWidth));
            dispatch(setSelectStartSec(pos.x / timelineWidth));
            dispatch(setSelectEndSec((pos.x + parseInt(ref.style.width)) / timelineWidth));
          }
          if (dir === 'right') {
            dispatch(setVideoCurrentTime((pos.x + parseInt(ref.style.width)) / timelineWidth));
            dispatch(setSelectEndSec((pos.x + parseInt(ref.style.width)) / timelineWidth));
          }
        },
      }}
    />
  </Timeline>
);

const mapStateToProps = state => ({
  timelineWidth: state.timeline.pxAs1Sec * state.movie.duration,
  selectStartX: state.timeline.pxAs1Sec * state.timeline.selectStartSec,
  selectorDefaultWidth: state.timeline.pxAs1Sec * state.timeline.selectingSec,
  selectorMinWidth: state.timeline.pxAs1Sec * state.timeline.minSelectingSec,
  selectorMaxWidth: state.timeline.pxAs1Sec * state.timeline.maxSelectingSec,
});

export default connect(mapStateToProps)(TimelineContainer);
