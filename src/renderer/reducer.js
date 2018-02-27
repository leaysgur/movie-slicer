import produce from 'immer';

const initialState = {
  ui: {
    route: 'standby',
  },
  timeline: {
    pxAs1Sec: 0.5,
    selectStartSec: 0,
    selectingSec: 30,
    maxSelectingSec: 140,
  },
  movie: {
    path: '',
    duration: 0,
    currentTime: 0, // for manual update
    currentTimeDisp: 0,
  },
};

export default (state = initialState, { type, payload }) =>
  produce(state, draft => {
    console.warn(type, payload);
    switch (type) {
      case 'LOAD_FILE':
        draft.ui.route = 'editor';
        draft.movie.path = payload;
        break;
      case 'GET_VIDEO_DURATION':
        draft.movie.duration = payload;
        break;
      case 'GET_VIDEO_CURRENT_TIME':
        draft.movie.currentTimeDisp = payload;
        break;
      case 'SET_CURRENT_TIME': {
        const currentTime = Math.max(0, draft.movie.duration * payload);
        draft.movie.currentTime = currentTime;
        draft.movie.currentTimeDisp = currentTime;
        break;
      }
      default:
    }
  });
