import { extendObservable, observable } from 'mobx';

class MovieStore {
  constructor() {
    extendObservable(this, {
      currentTime: 0, // for manual update
      currentTimeDisp: 0, // sync by video
      bfProbe: observable.shallowObject({}),
      afProbe: observable.shallowObject({}),
      get path() {
        return this.bfProbe.format.filename;
      },
      get duration() {
        return this.bfProbe.format.duration;
      },
    });
  }

  updateCurrentTime(percentage) {
    const currentTime = Math.max(0, this.duration * percentage);
    this.currentTime = currentTime;
    this.currentTimeDisp = currentTime;
  }
}

export default MovieStore;
