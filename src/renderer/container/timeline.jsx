import React from 'react';
import { inject } from 'mobx-react';

import Timeline from '../component/timeline';
import Selector from '../component/selector';

const TimelineContainer = ({
  timeline,
  movie,
  ui,
  settings,
  event,
}) => (
  <Timeline
    onClickZoomIn={() => event.zoomIn()}
    onClickZoomOut={() => event.zoomOut()}
  >
    <Selector
      ui={ui}
      movie={movie}
      timeline={timeline}
      settings={settings}
      onDrag={percentage => event.dragSelector(percentage)}
      onResizeLeft={(lPercentage, rPercentage) =>
        event.resizeSelectorByLeft(lPercentage, rPercentage)
      }
      onResizeRight={rPercentage =>
        event.resizeSelectorByRight(rPercentage)
      }
    />
  </Timeline>
);

export default inject('event', 'timeline', 'movie', 'settings', 'ui')(TimelineContainer);
