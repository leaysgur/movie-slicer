import React from 'react';
import { observer } from 'mobx-react';

import { Time } from '../component/formatter';

const SelectingInfo = ({ timeline }) => (
  <div className="SelectingInfo">
    <Time sec={timeline.selectStartSec} />
    {' - '}
    <Time sec={timeline.selectStartSec + timeline.selectingSec} />
    ({timeline.selectingSec}sec)
  </div>
);

export default observer(SelectingInfo);
