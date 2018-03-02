import { extendObservable } from 'mobx';

class UiStore {
  constructor() {
    Object.assign(this, {
      routes: {
        STANDBY: 'STANDBY',
        EDITOR: 'EDITOR',
      },
      zoomLvs: [0.125, 0.25, 0.5, 1, 2.5, 5, 10],
    });

    extendObservable(this, {
      route: 'STANDBY',
      zoomLv: 3,
      isProgressShown: false,
      isSettingsShown: false,
      get pxAs1Sec() {
        return this.zoomLvs[this.zoomLv];
      },
      get isPopupShown() {
        return this.isProgressShown || this.isSettingsShown;
      },
    });
  }
}

export default UiStore;
