import React from 'react';
import { connect } from 'react-redux';

const StandbyPage = ({ onChange }) => (
  <div>
    <input type="file" onChange={onChange} />
  </div>
);

function mapDispatchToProps(dispatch) {
  return {
    onChange(ev) {
      dispatch({ type: 'LOAD_FILE', payload: ev.target.files[0] });
    }
  };
}

export default connect(null, mapDispatchToProps)(StandbyPage);
