import { extendObservable } from 'mobx';

class MovieStore {
  constructor() {
    extendObservable(this, {
      path: '',
      size: 0,
      duration: 0,
      currentTime: 0, // for manual update
      currentTimeDisp: 0,
    });
  }
}

export default MovieStore;
