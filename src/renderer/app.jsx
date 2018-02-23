import React from 'react';
import { connect } from 'react-redux';

import StandbyPage from './page/standby';
import EditorPage from './page/editor';

class App extends React.Component {
  render() {
    const { route } = this.props;

    if (route === 'standby') {
      return <StandbyPage />;
    }

    if (route === 'editor') {
      return <EditorPage />;
    }

    return <div>404</div>;
  }
}

function mapStateToProps(state) {
  return {
    route: state.route,
  };
}

export default connect(mapStateToProps)(App);
