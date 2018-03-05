import React from 'react';
import { observer } from 'mobx-react';
import Rnd from 'react-rnd';

import SelectorLine from './line';
import SelectorThumb from './thumb';

class Selector extends React.Component {
  constructor() {
    super();
    this._el = null;
    // XXX: stopPropagation does not work...
    this._isSelecting = false;
    this._timer = null;
  }

  render() {
    const {
      ui,
      movie,
      timeline,
      settings,
      onDrag,
      onResizeLeft,
      onResizeRight,
    } = this.props;

    const timelineWidth = ui.pxAs1Sec * movie.duration;
    const selectStartX = ui.pxAs1Sec * timeline.selectStartSec;
    const selectorDefaultWidth = ui.pxAs1Sec * timeline.selectingSec;
    const selectorMinWidth = ui.pxAs1Sec * settings.minSelectingSec;
    const selectorMaxWidth = ui.pxAs1Sec * settings.maxSelectingSec;

    return (
      <div
        className="Selector"
        ref={el => this._el = el}
        style={{ width: `${timelineWidth}px`, height: '100%', overflow: 'hidden' }}
        onMouseMove={ev => {
          if (this._isMouseDown && !this._isSelecting) {
            this._onMouseDrag(ev);
          }
        }}
        onMouseDown={ev => {
          if (this._isSelecting || ev.target !== this._el) {
            return;
          }
          this._isMouseDown = true;
          this._onMouseDrag(ev);
        }}
        onMouseUp={() => this._isMouseDown = false}
      >
        <SelectorThumb
          movie={movie}
          ui={ui}
        />
        <SelectorLine
          movie={movie}
          ui={ui}
        />
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

  _onMouseDrag(ev) {
    const {
      ui,
      movie,
      onDrag,
    } = this.props;

    // parent is scrollable
    const x = this._el.parentNode.scrollLeft + ev.clientX;
    const timelineWidth = ui.pxAs1Sec * movie.duration;
    // same as drag it
    onDrag(x / timelineWidth);
  }
}

export default observer(Selector);
