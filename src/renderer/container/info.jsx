import React from 'react';
import { inject, observer } from 'mobx-react';

import SelectingInfo from '../component/selecting-info';
import Icon from '../component/icon';

const InfoContainer = ({ timeline, event }) => (
  <div className="L-Info">
    <div>
      <SelectingInfo timeline={timeline} />
    </div>
    <div>
      <button onClick={() => event.showSettings(true)}
      ><Icon name="settings" /></button>
      <button onClick={() => {
        event.showProgress(true);
        event.startSlice();
      }}><Icon name="cut" /></button>
    </div>
  </div>
);

export default inject('event', 'timeline')(observer(InfoContainer));
