import React from 'react';
import { connect } from 'react-redux';
import Rnd from 'react-rnd';

import { setCurrentTime } from '../action';

const TimelineContainer = ({
  timelineWidth,
  selectorDefaultWidth,
  selectorMaxWidth,
  dispatch,
}) => (
  <div style={{ overflowX: 'auto' }}>
    <div
      style={{
        width: `${timelineWidth}px`, height: '100%', backgroundColor: 'tomato'
      }}
      onClick={() => console.log('TODO')}
    >
      <Rnd
        default={{ x: 0, y: 0, width: selectorDefaultWidth, }}
        minHeight="100%"
        maxWidth={selectorMaxWidth}
        bounds="parent"
        dragAxis="x"
        style={{ backgroundColor: '#eee' }}
        onDrag={(_ev, data) => dispatch(setCurrentTime(data.x / timelineWidth))}
        onResize={(_ev, dir, _ref, _delta, pos) => dir === 'left' && dispatch(setCurrentTime(pos.x / timelineWidth))}
      />
    </div>
  </div>
);

const mapStateToProps = state => ({
  timelineWidth: state.movie.duration / state.timeline.pxAs1Sec,
  selectorDefaultWidth: state.timeline.pxAs1Sec * 30, // TODO: constants
  selectorMaxWidth: state.timeline.pxAs1Sec * 140, // TODO: constants
});

export default connect(mapStateToProps)(TimelineContainer);
