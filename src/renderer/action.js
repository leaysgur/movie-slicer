export const loadFile = file => ({
  type: 'LOAD_FILE',
  payload: file.path,
});
