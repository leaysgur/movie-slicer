import React from 'react';
import { observer } from 'mobx-react';

import { Time } from '../component/formatter';
import Icon from '../component/icon';

const PlayerControls = ({ movie, onClickTogglePause, onClickToggleMute }) => (
  <div className="PlayerControls">
    <Icon
      onClick={() => onClickTogglePause()}
      name={movie.isPaused ? 'play' : 'pause'}
      size="s"
    />
    <Icon
      onClick={() => onClickToggleMute()}
      name={movie.isMuted ? 'volume_off' : 'volume_on'}
      size="s"
    />
    <Time sec={movie.currentTimeDisp} /> / <Time sec={movie.duration} />
  </div>
);

export default observer(PlayerControls);
