import React from 'react';
import { connect } from 'react-redux';
import Rnd from 'react-rnd';

const TimelineContainer = ({ timelineWidth, selectorDefaultWidth }) => (
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
      />
    </div>
  </div>
);

const mapStateToProps = state => ({
  timelineWidth: state.movie.duration / state.timeline.pxAs1Sec,
  selectorDefaultWidth: state.timeline.pxAs1Sec * 30,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TimelineContainer);
