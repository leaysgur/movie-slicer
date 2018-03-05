import React from 'react';
import { observer } from 'mobx-react';

import { Time } from '../component/formatter';
import Icon from '../component/icon';

const PlayerControls = ({ movie, onClickToggleMute }) => (
  <div className="PlayerControls">
    <Icon name="play" size="s" />
    <Icon name="pause" size="s" />
    <button onClick={() => onClickToggleMute()}>
      { movie.isMuted ? (
        <Icon name="volume_off" size="s" />
      ) : (
        <Icon name="volume_on" size="s" />
      ) }
    </button>
    <Time sec={movie.currentTimeDisp} /> / <Time sec={movie.duration} />
  </div>
);

export default observer(PlayerControls);
