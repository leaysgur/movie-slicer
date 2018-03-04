import React from 'react';

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
      >-</button>
      <button
        onClick={ev => {
          ev.stopPropagation();
          onClickZoomIn();
        }}
      >+</button>
    </div>
    <div className="Timeline_Scroller">
      {children}
    </div>
  </div>
);

export default Timeline;
