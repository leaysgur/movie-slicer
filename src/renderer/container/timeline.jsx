import React from 'react';
import { connect } from 'react-redux';
import Rnd from 'react-rnd';

const TimelineContainer = ({ timelineWidth }) => (
  <div style={{ overflowX: 'auto' }}>
    <div
      style={{
        width: `${timelineWidth}px`, height: '100%', backgroundColor: 'tomato'
      }}
    >
      <Rnd
        default={{ x: 0, y: 0, width: 20, }}
        minHeight="100%"
        bounds="parent"
        dragAxis="x"
        style={{ backgroundColor: '#eee' }}
      />
    </div>
  </div>
);

const mapStateToProps = state => ({
  timelineWidth: state.movie.duration / state.ui.secByPx,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TimelineContainer);
