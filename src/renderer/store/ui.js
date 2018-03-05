import { extendObservable } from 'mobx';

class UiStore {
  constructor() {
    Object.assign(this, {
      zoomLvs: [0.125, 0.25, 0.5, 1, 2.5, 5, 10],
    });

    extendObservable(this, {
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

  zoomIn() {
    this.zoomLv = Math.min(this.zoomLv + 1, this.zoomLvs.length - 1);
  }
  zoomOut() {
    this.zoomLv = Math.max(this.zoomLv - 1, 0);
  }
}

export default UiStore;
