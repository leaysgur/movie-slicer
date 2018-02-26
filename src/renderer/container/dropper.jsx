import React from 'react';
import { connect } from 'react-redux';

import { loadFile } from '../action';

const DropperContainer = ({ onChangeFile }) => (
  <input type="file" onChange={onChangeFile} />
);

const mapDispatchToProps = dispatch => ({
  onChangeFile(ev) {
    dispatch(loadFile(ev.target.files[0]));
  }
});


export default connect(null, mapDispatchToProps)(DropperContainer);
