export const loadFile = file => ({
  type: 'LOAD_FILE',
  payload: file.path,
});

export const getVideoDuration = $video => ({
  type: 'GET_VIDEO_DURATION',
  payload: $video.duration,
});

export const setVideoCurrentTime = percentage => ({
  type: 'SET_VIDEO_CURRENT_TIME',
  payload: percentage,
});

export const getVideoCurrentTime = $video => ({
  type: 'GET_VIDEO_CURRENT_TIME',
  payload: $video.currentTime,
});
