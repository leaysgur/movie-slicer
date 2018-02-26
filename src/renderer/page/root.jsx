import React from 'react';
import { connect } from 'react-redux';

import StandbyPage from './standby';
import EditorPage from './editor';

const Root = ({ route }) => {
  if (route === 'standby') {
    return <StandbyPage />;
  }
  if (route === 'editor') {
    return <EditorPage />;
  }

  return <div>404</div>;
};

const mapStateToProps = state => ({
  route: state.route,
});

export default connect(mapStateToProps)(Root);
