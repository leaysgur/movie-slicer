import React from 'react';
import { inject } from 'mobx-react';

import Video from '../component/video';

const PlayerContainer = ({
  movie,
  timeline,
  event,
}) => (
  <Video
    movie={movie}
    timeline={timeline}
    onTimeUpdate={el => event.getVideoCurrentTime(el)}
  />
);

export default inject('movie', 'timeline', 'event')(PlayerContainer);
