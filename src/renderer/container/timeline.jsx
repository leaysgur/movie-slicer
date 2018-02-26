import React from 'react';
import { connect } from 'react-redux';

const TimelineContainer = ({ timelineWidth }) => (
  <div style={{ overflowX: 'auto' }}>
    <div
      style={{
        width: `${timelineWidth}px`, height: '100%', backgroundColor: 'tomato'
      }}
    />
  </div>
);

const mapStateToProps = state => ({
  timelineWidth: state.movie.duration / state.ui.secByPx,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TimelineContainer);
