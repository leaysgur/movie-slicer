import React from 'react';
import { inject } from 'mobx-react';

import Video from '../component/video';
import { Time } from '../component/formatter';

const PlayerContainer = ({
  movie,
  timeline,
  event,
}) => (
  <div>
    <Video
      movie={movie}
      timeline={timeline}
      onTimeUpdate={el => event.getVideoCurrentTime(el)}
    />
    <div>
      <Time sec={movie.currentTimeDisp} /> / <Time sec={movie.duration} />
    </div>
  </div>
);

export default inject('movie', 'timeline', 'event')(PlayerContainer);
