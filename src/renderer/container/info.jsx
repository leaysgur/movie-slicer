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
      <Icon
        onClick={() => event.showSettings(true)}
        name="settings"
      />
      <Icon
        onClick={() => event.saveSnapshot()}
        name="camera"
      />
      <Icon
        onClick={() => {
          event.showProgress(true);
          event.saveSlice();
        }}
        name="cut"
      />
    </div>
  </div>
);

export default inject('event', 'timeline')(observer(InfoContainer));
