import React from 'react';
import Rnd from 'react-rnd';

const Selector = ({
  timelineWidth,
  selectStartX,
  selectorDefaultWidth,
  selectorMinWidth,
  selectorMaxWidth,
  onDrag,
  onResize,
}) => (
  <div
    className="Selector"
    style={{ width: `${timelineWidth}px`, height: '100%', overflow: 'hidden' }}
  >
    <Rnd
      className="Selector_Bar"
      position={{ x: selectStartX, y: 0 }}
      size={{ width: selectorDefaultWidth, height: '100%' }}
      minHeight="100%"
      maxHeight="100%"
      minWidth={selectorMinWidth}
      maxWidth={selectorMaxWidth}
      bounds="parent"
      dragAxis="x"
      onDrag={(_ev, data) => onDrag(data)}
      onResize={(_ev, dir, ref, _delta, pos) => onResize(dir, ref, pos)}
    />
  </div>
);

export default Selector;
