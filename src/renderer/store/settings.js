import { decorate, observable, computed } from 'mobx';

class SettingsStore {
  constructor({ outputDir }) {
    this.presets = [
      'ultrafast',
      'superfast',
      'veryfast',
      'faster',
      'fast',
      'medium',
      'slow',
      'slower',
      'veryslow',
    ];

    this.minSelectingSec = 5;
    this.maxSelectingSec = 140;
    this.frameRate = 40;
    this.presetIdx = 0;
    this.outputDir = outputDir;
  }

  get preset() {
    return this.presets[this.presetIdx];
  }
}

decorate(SettingsStore, {
  minSelectingSec: observable,
  maxSelectingSec: observable,
  frameRate: observable,
  presetIdx: observable,
  outputDir: observable,
  preset: computed,
});
export default SettingsStore;
