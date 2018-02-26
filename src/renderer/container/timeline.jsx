import React from 'react';
import { connect } from 'react-redux';
import Rnd from 'react-rnd';

import { setCurrentTime } from '../action';

const TimelineContainer = ({ timelineWidth, selectorDefaultWidth, onDrag }) => (
  <div style={{ overflowX: 'auto' }}>
    <div
      style={{
        width: `${timelineWidth}px`, height: '100%', backgroundColor: 'tomato'
      }}
    >
      <Rnd
        default={{ x: 0, y: 0, width: selectorDefaultWidth, }}
        minHeight="100%"
        bounds="parent"
        dragAxis="x"
        style={{ backgroundColor: '#eee' }}
        onDrag={(_, data) => onDrag(data.x / timelineWidth)}
      />
    </div>
  </div>
);

const mapStateToProps = state => ({
  timelineWidth: state.movie.duration / state.timeline.pxAs1Sec,
  selectorDefaultWidth: state.timeline.pxAs1Sec * 30,
});

const mapDispatchToProps = dispatch => ({
  onDrag(ratio) {
    dispatch(setCurrentTime(ratio));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TimelineContainer);
