import React from 'react';
import { inject, observer } from 'mobx-react';

import StandbyPage from '../page/standby';
import EditorPage from '../page/editor';

const RootContainer = ({ ui }) => {
  if (ui.route === ui.routes.STANDBY) {
    return <StandbyPage />;
  }
  if (ui.route === ui.routes.EDITOR) {
    return <EditorPage />;
  }

  return <div>404</div>;
};

export default inject('ui')(observer(RootContainer));
