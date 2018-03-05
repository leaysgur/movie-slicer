import { extendObservable, observable } from 'mobx';

class MovieStore {
  constructor() {
    extendObservable(this, {
      isPaused: false,
      isMuted: true,
      currentTime: 0, // for manual update
      currentTimeDisp: 0, // sync by video
      bfProbe: observable.shallowObject({}),
      afProbe: observable.shallowObject({}),
      get hasBfFile() {
        return 'format' in this.bfProbe;
      },
      get bfPath() {
        return this.bfProbe.format.filename;
      },
      get afPath() {
        return this.afProbe.format.filename;
      },
      get duration() {
        return this.bfProbe.format.duration;
      },
      get bfInfo() {
        return this._toFormat(this.bfProbe);
      },
      get afInfo() {
        return this._toFormat(this.afProbe);
      },
    });
  }

  updateCurrentTime(percentage) {
    const currentTime = Math.max(0, this.duration * percentage);
    this.currentTime = currentTime;
    this.currentTimeDisp = currentTime;
  }

  _toFormat({ format, streams }) {
    if (!(format && streams)) {
      return null;
    }

    const videoStream = streams.find(stream => stream.codec_type === 'video') || {};
    const audioStream = streams.find(stream => stream.codec_type === 'audio') || {};

    return {
      container: format.format_name,
      videoCodec: videoStream.codec_name,
      audioCodec: audioStream.codec_name,
      size: format.size,
      duration: format.duration,
      bitRate: format.bit_rate,
      resolutionWidth: videoStream.width,
      resolutionHeight: videoStream.height,
      frameRate: videoStream.r_frame_rate,
    };
  }
}

export default MovieStore;
