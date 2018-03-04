import React from 'react';
import { observer } from 'mobx-react';

const Progress = ({ movie }) => (
  <div>
    {JSON.stringify(movie.bfProbe, null, 2)}
  </div>
);

export default observer(Progress);
