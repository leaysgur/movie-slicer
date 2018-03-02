import React from 'react';
import { inject } from 'mobx-react';

const DropperContainer = ({ event }) => (
  <input type="file" onChange={ev => event.standby.loadFile(ev.target.files[0])} />
);

export default inject('event')(DropperContainer);
