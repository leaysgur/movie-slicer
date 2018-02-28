import React from 'react';
import { connect } from 'react-redux';

import Timeline from '../../component/editor/timeline';
import Selector from '../../component/editor/selector';

import {
  setVideoCurrentTime,
  setSelectStartSec,
  setSelectEndSec,
  zoomIn,
  zoomOut,
} from '../../action';

const TimelineContainer = ({
  timelineWidth,
  selectStartX,
  selectorDefaultWidth,
  selectorMinWidth,
  selectorMaxWidth,
  dispatch,
}) => (
  <Timeline
    onClickZoomIn={() => dispatch(zoomIn())}
    onClickZoomOut={() => dispatch(zoomOut())}
  >
    <Selector
      {...{
        timelineWidth,
        selectStartX,
        selectorDefaultWidth,
        selectorMinWidth,
        selectorMaxWidth,
        onClickSelector(percentage) {
          dispatch(setVideoCurrentTime(percentage));
          dispatch(setSelectStartSec(percentage));
        },
        onDrag(percentage) {
          dispatch(setVideoCurrentTime(percentage));
          dispatch(setSelectStartSec(percentage));
        },
        onResizeLeft(lPercentage, rPercentage) {
          dispatch(setVideoCurrentTime(lPercentage));
          dispatch(setSelectStartSec(lPercentage));
          dispatch(setSelectEndSec(rPercentage));
        },
        onResizeRight(rPercentage) {
          dispatch(setVideoCurrentTime(rPercentage));
          dispatch(setSelectEndSec(rPercentage));
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
