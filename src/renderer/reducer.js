import produce from 'immer';

const initialState = {
  ui: {
    route: 'standby',
  },
  timeline: {
    pxAs1Sec: 10,
  },
  movie: {
    path: '',
    duration: 0,
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
      default:
    }
  });
