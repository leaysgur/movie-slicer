import { decorate, observable, computed } from 'mobx';

class UiStore {
  constructor() {
    this.zoomLvs = [0.125, 0.25, 0.5, 1, 2.5, 5, 10];

    this.zoomLv = 3;
    this.isProgressShown = false;
    this.isSettingsShown = false;
    this.isSlicing = false;
  }

  get pxAs1Sec() {
    return this.zoomLvs[this.zoomLv];
  }
  get isPopupShown() {
    return this.isProgressShown || this.isSettingsShown;
  }

  zoomIn() {
    this.zoomLv = Math.min(this.zoomLv + 1, this.zoomLvs.length - 1);
  }
  zoomOut() {
    this.zoomLv = Math.max(this.zoomLv - 1, 0);
  }
}

decorate(UiStore, {
  zoomLv: observable,
  isProgressShown: observable,
  isSettingsShown: observable,
  isSlicing: observable,
  pxAs1Sec: computed,
  isPopupShown: computed,
});
export default UiStore;
