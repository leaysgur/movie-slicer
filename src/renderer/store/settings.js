import { extendObservable } from 'mobx';

class SettingsStore {
  constructor() {
    extendObservable(this, {
      minSelectingSec: 5,
      maxSelectingSec: 140,
      frameRate: 40,
      preset: 'ultrafast',
      outputDir: '', // set in main.js
    });
  }
}

export default SettingsStore;
