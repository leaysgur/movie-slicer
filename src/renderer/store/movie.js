import { extendObservable } from 'mobx';

class MovieStore {
  constructor() {
    extendObservable(this, {
      path: '',
      size: 0,
      duration: 0,
      currentTime: 0, // for manual update
      currentTimeDisp: 0, // sync by video
    });
  }

  updateCurrentTime(percentage) {
    const currentTime = Math.max(0, this.duration * percentage);
    this.currentTime = currentTime;
    this.currentTimeDisp = currentTime;
  }
}

export default MovieStore;
