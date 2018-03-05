import React from 'react';

import Icon from './icon';

const Timeline = ({
  onClickZoomOut,
  onClickZoomIn,
  children,
}) => (
  <div className="Timeline">
    <div className="Timeline_Controls">
      <button
        onClick={ev => {
          ev.stopPropagation();
          onClickZoomOut();
        }}
      ><Icon name="zoom_out" size="s" /></button>
      <button
        onClick={ev => {
          ev.stopPropagation();
          onClickZoomIn();
        }}
      ><Icon name="zoom_in" size="s" /></button>
    </div>
    <div className="Timeline_Scroller">
      {children}
    </div>
  </div>
);

export default Timeline;
