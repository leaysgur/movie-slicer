import { execCommand } from '../util/ipc';

class StandbyEvent {
  constructor(store) {
    this._store = store;
  }

  async loadFile(file) {
    const { ui, probe, movie } = this._store;

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

    probe.before = probeInfo;
    movie.path = file.path;
    ui.route = ui.routes.EDITOR;
  }
}

export default StandbyEvent;
