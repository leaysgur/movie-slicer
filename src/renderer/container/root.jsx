import React from 'react';
import { connect } from 'react-redux';

import StandbyPage from '../page/standby';
import EditorPage from '../page/editor';

const RootContainer = ({ route, routes }) => {
  if (route === routes.STANDBY) {
    return <StandbyPage />;
  }
  if (route === routes.EDITOR) {
    return <EditorPage />;
  }

  return <div>404</div>;
};

const mapStateToProps = state => ({
  route: state.ui.route,
  routes: state.ui.routes,
});

export default connect(mapStateToProps)(RootContainer);
