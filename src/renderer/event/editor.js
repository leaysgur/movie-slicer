import { execCommand } from '../util/ipc';

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

  async startSlice() {
    const { ui, timeline, probe, movie, settings } = this._store;
    ui.isProgressShown = true;

    const outputName = `${timeline.selectStartSec}-${timeline.selectStartSec + timeline.selectingSec}.mp4`;
    const output = `${settings.outputDir}/${outputName}`;

    try {
      await execCommand('cmd:ffmpeg', {
        startSec: timeline.selectStartSec,
        input: movie.path,
        time: timeline.selectingSec,
        frameRate: settings.frameRate,
        preset: settings.preset,
        output,
      });
    } catch(err) {
      console.error('Err! check cmd below');
      console.error(err.cmd);
      return;
    }

    let probeInfo;
    try {
      const probeRes = await execCommand('cmd:ffprobe', {
        input: output,
      });
      probeInfo = JSON.parse(probeRes);
    } catch(err) {
      console.error('Err! check cmd below');
      console.error(err.cmd);
      return;
    }

    probe.after = probeInfo;
  }
}

export default EditorEvent;
