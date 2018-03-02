import React from 'react';
import { inject, observer } from 'mobx-react';

import Timeline from '../../component/editor/timeline';
import Selector from '../../component/editor/selector';

const TimelineContainer = ({
  timeline,
  movie,
  ui,
  settings,
  event,
}) => (
  <Timeline
    onClickZoomIn={() => event.editor.zoomIn()}
    onClickZoomOut={() => event.editor.zoomOut()}
  >
    <Selector
      timelineWidth={ui.pxAs1Sec * movie.duration}
      selectStartX={ui.pxAs1Sec * timeline.selectStartSec}
      selectorDefaultWidth={ui.pxAs1Sec * timeline.selectingSec}
      selectorMinWidth={ui.pxAs1Sec * settings.minSelectingSec}
      selectorMaxWidth={ui.pxAs1Sec * settings.maxSelectingSec}
      onClickSelector={percentage => {
        event.editor.setVideoCurrentTime(percentage);
        event.editor.setSelectStartSec(percentage);
      }}
      onDrag={percentage => {
        event.editor.setVideoCurrentTime(percentage);
        event.editor.setSelectStartSec(percentage);
      }}
      onResizeLeft={(lPercentage, rPercentage) => {
        event.editor.setVideoCurrentTime(lPercentage);
        event.editor.setSelectStartSec(lPercentage);
        event.editor.setSelectEndSec(rPercentage);
      }}
      onResizeRight={rPercentage => {
        event.editor.setVideoCurrentTime(rPercentage);
        event.editor.setSelectEndSec(rPercentage);
      }}
    />
  </Timeline>
);

export default inject('event', 'timeline', 'movie', 'settings', 'ui')(observer(TimelineContainer));
