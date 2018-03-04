import React from 'react';

const Popup = ({ isShown, children }) =>
  isShown ? (
    <div className="Popup">
      <div className="Popup_Inner">
        {children}
      </div>
    </div>
  ) : null;

export default Popup;
