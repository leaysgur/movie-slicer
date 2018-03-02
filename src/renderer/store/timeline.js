import { extendObservable } from 'mobx';

class TimelineStore {
  constructor() {
    extendObservable(this, {
      selectStartSec: 0,
      selectingSec: 30,
      get selectEndSec() {
        return this.selectStartSec + this.selectingSec;
      },
    });
  }
}

export default TimelineStore;
