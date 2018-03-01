export default {
  ui: {
    route: 'STANDBY',
    routes: {
      STANDBY: 'STANDBY',
      EDITOR: 'EDITOR',
    },
    zoomLv: 3,
    zoomLvs: [0.125, 0.25, 0.5, 1, 2.5, 5, 10],
    isProgressShown: false,
    isSettingsShown: false,
  },
  timeline: {
    pxAs1Sec: 1, // = ui.zoomLvs[ui.zoomLv]
    selectStartSec: 0,
    selectingSec: 30,
  },
  settings: {
    minSelectingSec: 5,
    maxSelectingSec: 140,
    frameRate: 40,
    preset: 'ultrafast',
    outputDir: '', // set in main.js
  },
  movie: {
    path: '',
    size: 0,
    duration: 0,
    currentTime: 0, // for manual update
    currentTimeDisp: 0,
  },
};
