import React from 'react';
import { inject } from 'mobx-react';

import Video from '../../component/editor/video';

const PlayerContainer = ({
  movie,
  timeline,
  event,
}) => (
  <Video
    movie={movie}
    timeline={timeline}
    onTimeUpdate={el => event.editor.getVideoCurrentTime(el)}
  />
);

export default inject('movie', 'timeline', 'event')(PlayerContainer);
