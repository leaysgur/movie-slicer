import React from 'react';
import { connect } from 'react-redux';

const PopupContainer = ({ isPopupShown, isProgressPopup }) =>
  isPopupShown ? (
    <div className="Popup">
      { isProgressPopup && (
        <div className="Popup_Inner">Progress</div>
      ) }
    </div>
  ) : null;

const mapStateToProps = state => ({
  isPopupShown: state.ui.isProgressShown || false,
  isProgressPopup: state.ui.isProgressShown,
});

export default connect(mapStateToProps)(PopupContainer);
