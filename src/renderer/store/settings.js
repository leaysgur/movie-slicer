import { extendObservable } from 'mobx';

class SettingsStore {
  constructor({ outputDir }) {
    extendObservable(this, {
      minSelectingSec: 5,
      maxSelectingSec: 140,
      frameRate: 40,
      preset: 'ultrafast',
      outputDir: outputDir,
    });
  }
}

export default SettingsStore;
