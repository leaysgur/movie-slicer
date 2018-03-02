import { extendObservable, observable } from 'mobx';

class ProbeStore {
  constructor() {
    extendObservable(this, {
      before: observable.shallowObject({}),
      after: observable.shallowObject({}),
    });
  }
}

export default ProbeStore;
