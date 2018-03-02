import React from 'react';
import { inject } from 'mobx-react';

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
      ui={ui}
      movie={movie}
      timeline={timeline}
      settings={settings}
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

export default inject('event', 'timeline', 'movie', 'settings', 'ui')(TimelineContainer);
