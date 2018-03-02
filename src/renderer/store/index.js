import UiStore from './ui';
import SettingsStore from './settings';
import TimelineStore from './timeline';
import MovieStore from './movie';
import ProbeStore from './movie';

class Store {
  constructor({ settings }) {
    this.ui = new UiStore();
    this.settings = new SettingsStore(settings);
    this.timeline = new TimelineStore();
    this.movie = new MovieStore();
    this.probe = new ProbeStore();
  }
}

export default Store;
