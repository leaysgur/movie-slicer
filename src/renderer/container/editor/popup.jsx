import React from 'react';
import { connect } from 'react-redux';

import Popup from '../../component/editor/popup';
import Settings from '../../component/editor/settings';
import { updateSettings } from '../../action';

const PopupContainer = ({
  isPopupShown,
  isProgressPopup,
  isSettingsPopup,
  settings,
  dispatch,
}) => (
  <Popup
    isShown={isPopupShown}
  >
    { isProgressPopup && (
      <div>Progress</div>
    ) }
    { isSettingsPopup && (
      <Settings
        settings={settings}
        onChangeSettings={(prop, value) => dispatch(updateSettings(prop, value))}
      />
    ) }
  </Popup>
);

const mapStateToProps = state => ({
  isPopupShown: state.ui.isProgressShown || state.ui.isSettingsShown,
  isProgressPopup: state.ui.isProgressShown,
  isSettingsPopup: state.ui.isSettingsShown,
  settings: state.settings,
});

export default connect(mapStateToProps)(PopupContainer);
