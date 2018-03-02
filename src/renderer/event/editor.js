class EditorEvent {
  constructor(store) {
    this._store = store;
  }

  getVideoDuration(el) {
    const { movie } = this._store;
    movie.duration = el.duration;
  }
  getVideoCurrentTime(el) {
    const { movie } = this._store;
    movie.currentTimeDisp = el.currentTime;
  }

  zoomIn() {
    const { ui } = this._store;
    ui.zoomLv = Math.min(ui.zoomLv + 1, ui.zoomLvs.length - 1);
  }
  zoomOut() {
    const { ui } = this._store;
    ui.zoomLv = Math.max(ui.zoomLv - 1, 0);
  }

  setVideoCurrentTime(percentage) {
    const { movie } = this._store;
    const currentTime = Math.max(0, movie.duration * percentage);
    movie.currentTime = currentTime;
    movie.currentTimeDisp = currentTime;
  }
  setSelectStartSec(percentage) {
    const { movie, timeline } = this._store;
    const startTime = Math.max(0, movie.duration * percentage);
    timeline.selectStartSec = startTime;
  }
  setSelectEndSec(percentage) {
    const { movie, timeline } = this._store;
    const endTime = Math.max(0, movie.duration * percentage);
    timeline.selectingSec = (endTime - timeline.selectStartSec)|0;
  }

  showProgress() {
    const { ui } = this._store;
    ui.isProgressShown = true;
  }
  hideProgress() {
    const { ui } = this._store;
    ui.isProgressShown = false;
  }
  showSettings() {
    const { ui } = this._store;
    ui.isSettingsShown = true;
  }
  hideSettings() {
    const { ui } = this._store;
    ui.isSettingsShown = false;
  }
  updateSettings(prop, value) {
    const { settings } = this._store;
    settings[prop] = value;
  }
}

export default EditorEvent;
