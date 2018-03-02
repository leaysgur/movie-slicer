import UiStore from './ui';
import SettingsStore from './settings';
import TimelineStore from './timeline';
import MovieStore from './movie';

class Store {
  constructor() {
    this.ui = new UiStore();
    this.settings = new SettingsStore();
    this.timeline = new TimelineStore();
    this.movie = new MovieStore();
  }
}

export default Store;
