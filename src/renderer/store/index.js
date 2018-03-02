import UiStore from './ui';
import SettingsStore from './settings';
import TimelineStore from './timeline';
import MovieStore from './movie';

class Store {
  constructor({ settings }) {
    this.ui = new UiStore();
    this.settings = new SettingsStore(settings);
    this.timeline = new TimelineStore();
    this.movie = new MovieStore();
  }
}

export default Store;
