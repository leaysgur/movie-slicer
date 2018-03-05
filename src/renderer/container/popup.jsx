import React from 'react';
import { inject, observer } from 'mobx-react';

import Popup from '../component/popup';
import Settings from '../component/settings';
import Progress from '../component/progress';

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
        onClickClose={() => event.showProgress(false)}
      />
    ) }
    { ui.isSettingsShown && (
      <Settings
        settings={settings}
        onChangeSettings={(prop, value) => event.updateSettings(prop, value)}
        onClickOutputDir={() => event.selectOutputDir()}
        onClickClose={() => event.showSettings(false)}
        onClickUrl={url => event.openUrl(url)}
      />
    ) }
  </Popup>
);

export default inject('settings', 'ui', 'movie', 'event')(observer(PopupContainer));
