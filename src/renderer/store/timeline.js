import { decorate, observable, computed, } from 'mobx';

class TimelineStore {
  constructor() {
    this.totalSec = 0;
    this.selectStartSec = 0;
    this.selectingSec = 30;
  }

  get selectEndSec() {
    return this.selectStartSec + this.selectingSec;
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

decorate(TimelineStore, {
  totalSec: observable,
  selectStartSec: observable,
  selectingSec: observable,
  selectEndSec: computed,
});
export default TimelineStore;
