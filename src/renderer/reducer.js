import produce from 'immer';

export default (state, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case 'LOAD_FILE': {
        draft.ui.route = draft.ui.routes.EDITOR;
        draft.movie.path = payload.path;
        draft.movie.size = payload.size;
        break;
      }
      case 'GET_VIDEO_DURATION': {
        draft.movie.duration = payload;
        break;
      }
      case 'GET_VIDEO_CURRENT_TIME': {
        draft.movie.currentTimeDisp = payload;
        break;
      }
      case 'SET_VIDEO_CURRENT_TIME': {
        const currentTime = Math.max(0, draft.movie.duration * payload);
        draft.movie.currentTime = currentTime;
        draft.movie.currentTimeDisp = currentTime;
        break;
      }
      case 'SET_SELECT_START_SEC': {
        const startTime = Math.max(0, draft.movie.duration * payload);
        draft.timeline.selectStartSec = startTime;
        break;
      }
      case 'SET_SELECT_END_SEC': {
        const endTime = Math.max(0, draft.movie.duration * payload);
        draft.timeline.selectingSec = (endTime - draft.timeline.selectStartSec)|0;
        break;
      }
      case 'ZOOM_IN': {
        draft.ui.zoomLv = Math.min(draft.ui.zoomLv + 1, draft.ui.zoomLvs.length - 1);
        draft.timeline.pxAs1Sec = draft.ui.zoomLvs[draft.ui.zoomLv];
        break;
      }
      case 'ZOOM_OUT': {
        draft.ui.zoomLv = Math.max(draft.ui.zoomLv - 1, 0);
        draft.timeline.pxAs1Sec = draft.ui.zoomLvs[draft.ui.zoomLv];
        break;
      }
      case 'SHOW_PROGRESS': {
        draft.ui.isProgressShown = true;
        break;
      }
      case 'HIDE_PROGRESS': {
        draft.ui.isProgressShown = false;
        break;
      }
      case 'SHOW_SETTINGS': {
        draft.ui.isSettingsShown = true;
        break;
      }
      case 'HIDE_SETTINGS': {
        draft.ui.isSettingsShown = false;
        break;
      }
      case 'UPDATE_SETTINGS': {
        draft.settings[payload.prop] = payload.value;
        break;
      }
      default:
    }
  });
