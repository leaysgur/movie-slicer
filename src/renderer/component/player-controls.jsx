import React from 'react';
import { observer } from 'mobx-react';

import { Time } from '../component/formatter';
import Icon from '../component/icon';

const PlayerControls = ({ movie, onClickTogglePause, onClickToggleMute }) => (
  <div className="PlayerControls">
    <button onClick={() => onClickTogglePause()}>
      <Icon name={movie.isPaused ? 'play' : 'pause'} size="s" />
    </button>
    <button onClick={() => onClickToggleMute()}>
      <Icon name={movie.isMuted ? 'volume_off' : 'volume_on'} size="s" />
    </button>
    <Time sec={movie.currentTimeDisp} /> / <Time sec={movie.duration} />
  </div>
);

export default observer(PlayerControls);
