import { execCommand } from '../util/ipc';

class StandbyEvent {
  constructor(store) {
    this._store = store;
  }

  async loadFile(file) {
    const { ui, movie, timeline } = this._store;

    let probeInfo;
    try {
      const probeRes = await execCommand('cmd:ffprobe', {
        input: file.path,
      });
      probeInfo = JSON.parse(probeRes);
    } catch(err) {
      console.error('Err! check cmd below');
      console.error(err.cmd);
      return;
    }

    movie.bfProbe = probeInfo;
    timeline.totalSec = movie.duration;
    ui.route = ui.routes.EDITOR;
  }
}

export default StandbyEvent;
