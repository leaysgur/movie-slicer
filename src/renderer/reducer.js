import produce from 'immer';

const initialState = {
  route: 'standby',
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
        draft.route = 'editor';
        draft.movie.path = payload;
        break;
      case 'GET_VIDEO_DURATION':
        draft.movie.duration = payload;
        break;
      default:
    }
  });
