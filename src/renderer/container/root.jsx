import React from 'react';
import { connect } from 'react-redux';

import StandbyPage from '../page/standby';
import EditorPage from '../page/editor';

const RootContainer = ({ route }) => {
  if (route === 'standby') {
    return <StandbyPage />;
  }
  if (route === 'editor') {
    return <EditorPage />;
  }

  return <div>404</div>;
};

const mapStateToProps = state => ({
  route: state.ui.route,
});

export default connect(mapStateToProps)(RootContainer);
