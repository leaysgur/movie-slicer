import React from 'react';
import { inject } from 'mobx-react';
import Mousetrap from 'mousetrap';

import Video from '../component/video';
import PlayerControls from '../component/player-controls';

class PlayerContainer extends React.Component {
  render() {
    const {
      movie,
      timeline,
      event,
    } = this.props;
    return (
      <div className="L-Player">
        <Video
          movie={movie}
          timeline={timeline}
          onTimeUpdate={el => event.getVideoCurrentTime(el)}
        />
        <div className="L-Player_Controls">
          <PlayerControls
            movie={movie}
            onClickTogglePause={() => event.togglePause()}
            onClickToggleMute={() => event.toggleMute()}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    Mousetrap.bind('space', () => this.props.event.togglePause());
  }
  componentWillUnmount() {
    Mousetrap.unbind('space');
  }
}

export default inject('movie', 'timeline', 'event')(PlayerContainer);
