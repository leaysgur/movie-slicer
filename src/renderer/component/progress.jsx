import React from 'react';
import { observer } from 'mobx-react';

import { MainHeading, SubHeading } from './heading';
import { InfoLabelColumn, InfoColumn } from './info';
import Icon from './icon';

const Progress = ({ movie, onClickClose }) => (
  <div className="Progress">
    <MainHeading>Progress</MainHeading>

    <div className="Progress_Section">
      <SubHeading>Status</SubHeading>
      <div className="Progress_Center">
        <p>
          <Icon
            {...movie.afInfo ? {
              name: 'done',
              size: 'l',
            } : {
              name: 'processing',
              anim: 'spin',
              size: 'l',
            }}
          />
        </p>
      </div>
    </div>

    <div className="Progress_Section">
      <SubHeading>Specs</SubHeading>
      <div className="Progress_Col">
        <div className="Progress_Right Progress_Bold">
          <div>&nbsp;</div>
          <InfoLabelColumn />
        </div>
        <div>
          <div className="Progress_Center Progress_Bold">Before</div>
          <InfoColumn {...movie.bfInfo} />
        </div>
        <div>
          <div className="Progress_Center Progress_Bold">After</div>
          { movie.afInfo ? (
            <InfoColumn {...movie.afInfo} />
          ) : (
            <div>...</div>
          ) }
        </div>
      </div>
    </div>

    <div className="Progress_Center">
      <Icon
        onClick={() => onClickClose()}
        name="close"
        size="m"
      />
    </div>
  </div>
);


export default observer(Progress);
