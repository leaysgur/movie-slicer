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
      onDrag={percentage => event.editor.dragSelector(percentage)}
      onResizeLeft={(lPercentage, rPercentage) =>
        event.editor.resizeSelectorByLeft(lPercentage, rPercentage)
      }
      onResizeRight={rPercentage =>
        event.editor.resizeSelectorByRight(rPercentage)
      }
    />
  </Timeline>
);

export default inject('event', 'timeline', 'movie', 'settings', 'ui')(observer(TimelineContainer));
