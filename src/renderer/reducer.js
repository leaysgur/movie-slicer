import produce from 'immer';

const initialState = {
  route: 'standby',
  movie: {
    path: '',
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
      default:
    }
  });
