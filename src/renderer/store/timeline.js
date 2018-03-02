import { extendObservable } from 'mobx';

class TimelineStore {
  constructor() {
    extendObservable(this, {
      totalSec: 0,
      selectStartSec: 0,
      selectingSec: 30,
      get selectEndSec() {
        return this.selectStartSec + this.selectingSec;
      },
    });
  }

  updateSelectStartSec(percentage) {
    const startTime = Math.max(0, this.totalSec * percentage);
    this.selectStartSec = startTime;
  }

  updateSelectingSec(percentage) {
    const endTime = Math.max(0, this.totalSec * percentage);
    this.selectingSec = (endTime - this.selectStartSec)|0;
  }
}

export default TimelineStore;
