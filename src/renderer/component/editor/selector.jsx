import React from 'react';
import Rnd from 'react-rnd';

class Selector extends React.Component {
  constructor() {
    super();
    // XXX: stopPropagation does not work...
    this._isSelecting = false;
    this._timer = null;
  }

  render() {
    const {
      timelineWidth,
      selectStartX,
      selectorDefaultWidth,
      selectorMinWidth,
      selectorMaxWidth,
      onDrag,
      onResizeLeft,
      onResizeRight,
    } = this.props;

    return (
      <div
        className="Selector"
        style={{ width: `${timelineWidth}px`, height: '100%', overflow: 'hidden' }}
        onClick={ev => {
          if (this._isSelecting) {
            return;
          }
          // parent is scrollable
          const x = ev.target.parentNode.scrollLeft + ev.clientX;
          // same as drag it
          onDrag(x / timelineWidth);
        }}
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
          onDrag={(_ev, { x }) => {
            onDrag(x / timelineWidth);

            this._isSelecting = true;
            this._timer && clearTimeout(this._timer);
            this._timer = setTimeout(() => this._isSelecting = false, 500);
          }}
          onResize={(_ev, dir, ref, _delta, pos) => {
            const lEdge = pos.x / timelineWidth;
            const rEdge = (pos.x + parseInt(ref.style.width)) / timelineWidth;
            if (dir === 'left') {
              onResizeLeft(lEdge, rEdge);
            }
            if (dir === 'right') {
              onResizeRight(rEdge);
            }

            this._isSelecting = true;
            this._timer && clearTimeout(this._timer);
            this._timer = setTimeout(() => this._isSelecting = false, 500);
          }}
        />
      </div>
    );
  }
}

export default Selector;
