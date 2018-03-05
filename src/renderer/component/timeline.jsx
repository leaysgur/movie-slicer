import React from 'react';

import Icon from './icon';

const Timeline = ({
  onClickZoomOut,
  onClickZoomIn,
  children,
}) => (
  <div className="Timeline">
    <div className="Timeline_Controls">
      <Icon
        onClick={ev => {
          ev.stopPropagation();
          onClickZoomOut();
        }}
        name="zoom_out"
        size="s"
      />
      <Icon
        onClick={ev => {
          ev.stopPropagation();
          onClickZoomIn();
        }}
        name="zoom_in"
        size="s"
      />
    </div>
    <div className="Timeline_Scroller">
      {children}
    </div>
  </div>
);

export default Timeline;
