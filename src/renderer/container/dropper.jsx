import React from 'react';
import { connect } from 'react-redux';

import { loadFile } from '../action';

const DropperContainer = ({ dispatch }) => (
  <input type="file" onChange={ev => dispatch(loadFile(ev.target.files[0]))} />
);

export default connect()(DropperContainer);
