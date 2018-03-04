import { extendObservable } from 'mobx';

class SettingsStore {
  constructor({ outputDir }) {
    Object.assign(this, {
      presets: [
        'ultrafast',
        'superfast',
        'veryfast',
        'faster',
        'fast',
        'medium',
        'slow',
        'slower',
        'veryslow',
      ]
    });
    extendObservable(this, {
      minSelectingSec: 5,
      maxSelectingSec: 140,
      frameRate: 40,
      presetIdx: 0,
      outputDir: outputDir,
      get preset() {
        return this.presets[this.presetIdx];
      },
    });
  }
}

export default SettingsStore;
