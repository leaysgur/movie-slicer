import React from 'react';
import { inject, observer } from 'mobx-react';

import { Time } from '../../component/editor/formatter';

const InfoContainer = ({ movie, timeline, event }) => (
  <center>
    Playing: <Time sec={movie.currentTimeDisp} /> / <Time sec={movie.duration} />
    <br />
    Selecting: <Time sec={timeline.selectStartSec} /> - <Time sec={timeline.selectStartSec + timeline.selectingSec} />({timeline.selectingSec}sec)
    <br />
    <button onClick={() => event.editor.showSettings(true)}
    >Settings</button>
    <button onClick={() => event.editor.startSlice()}>Exec</button>
  </center>
);

export default inject('event', 'timeline', 'movie')(observer(InfoContainer));
