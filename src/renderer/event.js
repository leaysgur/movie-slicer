import { execCommand } from './util/ipc';
import { shell, remote } from 'electron';

class Event {
  constructor(store) {
    this._store = store;
  }

  async loadFile(file) {
    const { movie, timeline } = this._store;

    let probeInfo;
    try {
      const probeRes = await execCommand('cmd:ffprobe', {
        input: file.path,
      });
      probeInfo = JSON.parse(probeRes);
    } catch(err) {
      console.error(err);
      remote.dialog.showErrorBox('Error', 'Open devtools for more detail.');
      return;
    }

    movie.bfProbe = probeInfo;
    timeline.totalSec = movie.duration;
  }

  clearFile() {
    const { movie } = this._store;
    movie.bfProbe = {};
  }

  togglePause() {
    const { movie } = this._store;
    movie.isPaused = !movie.isPaused;
  }
  toggleMute() {
    const { movie } = this._store;
    movie.isMuted = !movie.isMuted;
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

  showProgress(bool) {
    const { ui } = this._store;
    ui.isProgressShown = bool;
  }

  async startSlice() {
    const { timeline, movie, settings } = this._store;

    const outputName = `${timeline.selectStartSec}-${timeline.selectStartSec + timeline.selectingSec}.mp4`;
    const output = `${settings.outputDir}/${outputName}`;

    try {
      await execCommand('cmd:ffmpeg', {
        startSec: timeline.selectStartSec,
        input: movie.bfPath,
        time: timeline.selectingSec,
        frameRate: settings.frameRate,
        preset: settings.preset,
        output,
      });
    } catch(err) {
      console.error(err);
      remote.dialog.showErrorBox('Error', 'Open devtools for more detail.');
      return;
    }

    let probeInfo;
    try {
      const probeRes = await execCommand('cmd:ffprobe', {
        input: output,
      });
      probeInfo = JSON.parse(probeRes);
    } catch(err) {
      console.error(err);
      remote.dialog.showErrorBox('Error', 'Open devtools for more detail.');
      return;
    }

    movie.afProbe = probeInfo;
    shell.showItemInFolder(movie.afPath);
  }

  openUrl(url) {
    shell.openExternal(url);
  }
}

export default Event;
