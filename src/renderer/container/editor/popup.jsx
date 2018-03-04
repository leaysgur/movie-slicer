import React from 'react';
import { inject, observer } from 'mobx-react';

import Popup from '../../component/editor/popup';
import Settings from '../../component/editor/settings';
import Progress from '../../component/editor/progress';

const PopupContainer = ({
  ui,
  movie,
  settings,
  event,
}) => (
  <Popup
    isShown={ui.isPopupShown}
  >
    { ui.isProgressShown && (
      <Progress
        movie={movie}
      />
    ) }
    { ui.isSettingsShown && (
      <Settings
        settings={settings}
        onChangeSettings={(prop, value) => event.editor.updateSettings(prop, value)}
        onClickClose={() => event.editor.showSettings(false)}
        onClickUrl={url => event.editor.openUrl(url)}
      />
    ) }
  </Popup>
);

export default inject('settings', 'ui', 'movie', 'event')(observer(PopupContainer));
