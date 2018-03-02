import React from 'react';
import { inject, observer } from 'mobx-react';

import Popup from '../../component/editor/popup';
import Settings from '../../component/editor/settings';

const PopupContainer = ({
  ui,
  settings,
  event,
}) => (
  <Popup
    isShown={ui.isPopupShown}
  >
    { ui.isProgressShown && (
      <div>Progress</div>
    ) }
    { ui.isSettingsShown && (
      <Settings
        settings={settings}
        onChangeSettings={(prop, value) => event.editor.updateSettings(prop, value)}
        onClickClose={() => event.editor.showSettings(false)}
      />
    ) }
  </Popup>
);

export default inject('settings', 'ui', 'event')(observer(PopupContainer));
