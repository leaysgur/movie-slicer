import { ipcRenderer } from 'electron';

class EditorEvent {
  constructor(store) {
    this._store = store;
  }

  getVideoDuration(el) {
    const { movie, timeline } = this._store;
    // for display
    movie.duration = el.duration;
    // for calculation
    timeline.totalSec = el.duration;
  }
  getVideoCurrentTime(el) {
    const { movie } = this._store;
    movie.currentTimeDisp = el.currentTime;
  }

  zoomIn() {
    const { ui } = this._store;
    ui.zoomIn();
  }
  zoomOut() {
    const { ui } = this._store;
    ui.zoomOut();
  }

  dragSelector(percentage) {
    const { movie, timeline } = this._store;
    movie.updateCurrentTime(percentage);
    timeline.updateSelectStartSec(percentage);
  }
  resizeSelectorByLeft(lPercentage, rPercentage) {
    const { movie, timeline } = this._store;
    movie.updateCurrentTime(lPercentage);
    timeline.updateSelectStartSec(lPercentage);
    timeline.updateSelectingSec(rPercentage);
  }
  resizeSelectorByRight(rPercentage) {
    const { movie, timeline } = this._store;
    movie.updateCurrentTime(rPercentage);
    timeline.updateSelectingSec(rPercentage);
  }

  showSettings(bool) {
    const { ui } = this._store;
    ui.isSettingsShown = bool;
  }
  updateSettings(prop, value) {
    const { settings } = this._store;
    settings[prop] = value;
  }

  startSlice() {
    const { ui, timeline, movie, settings } = this._store;
    ui.isProgressShown = true;

    ipcRenderer.once('cmd:ffmpeg:result', (_ev, { type, payload }) => {
      if (type === 'err') {
        console.error('Err! check cmd below');
        console.error(payload.cmd);
        return;
      }
      // used as success
      console.log(payload);
    });

    ipcRenderer.send('cmd:ffmpeg', {
      startSec: timeline.selectStartSec,
      input: movie.path,
      time: timeline.selectingSec,
      frameRate: settings.frameRate,
      outputDir: settings.outputDir,
      preset: settings.preset,
    });
  }
}

export default EditorEvent;
