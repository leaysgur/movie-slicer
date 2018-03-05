import React from 'react';
import { inject } from 'mobx-react';

import Video from '../component/video';
import PlayerControls from '../component/player-controls';

const PlayerContainer = ({
  movie,
  timeline,
  event,
}) => (
  <div className="L-Player">
    <Video
      movie={movie}
      timeline={timeline}
      onTimeUpdate={el => event.getVideoCurrentTime(el)}
    />
    <div className="L-Player_Controls">
      <PlayerControls
        movie={movie}
        onClickToggleMute={() => event.toggleMute()}
      />
    </div>
  </div>
);

export default inject('movie', 'timeline', 'event')(PlayerContainer);
