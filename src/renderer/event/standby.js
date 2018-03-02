class StandbyEvent {
  constructor(store) {
    this._store = store;
  }

  loadFile(file) {
    const { ui, movie } = this._store;
    ui.route = ui.routes.EDITOR;
    movie.path = file.path;
    movie.size = file.size;
  }
}

export default StandbyEvent;
