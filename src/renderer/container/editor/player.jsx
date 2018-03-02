import React from 'react';
import { inject, observer } from 'mobx-react';

import Video from '../../component/editor/video';

const PlayerContainer = ({
  movie,
  timeline,
  event,
}) => (
  <Video
    movie={movie}
    timeline={timeline}
    onLoadedMetadata={el => event.editor.getVideoDuration(el)}
    onTimeUpdate={el => event.editor.getVideoCurrentTime(el)}
  />
);

export default inject('movie', 'timeline', 'event')(observer(PlayerContainer));
