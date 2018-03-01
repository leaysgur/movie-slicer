import React from 'react';
import { connect } from 'react-redux';

const PopupContainer = ({ isPopupShown, isProgressPopup, isSettingsPopup }) =>
  isPopupShown ? (
    <div className="Popup">
      { isProgressPopup && (
        <div className="Popup_Inner">Progress</div>
      ) }
      { isSettingsPopup && (
        <div className="Popup_Inner">Settings</div>
      ) }
    </div>
  ) : null;

const mapStateToProps = state => ({
  isPopupShown: state.ui.isProgressShown || state.ui.isSettingsShown,
  isProgressPopup: state.ui.isProgressShown,
  isSettingsPopup: state.ui.isSettingsShown,
});

export default connect(mapStateToProps)(PopupContainer);
