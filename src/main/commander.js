function ffmpeg({
  startSec,
  input,
  preset,
  time,
  frameRate,
  output,
}) {
  // base
  let cmd = 'ffmpeg -loglevel error';
  // input
  cmd += ` -ss ${startSec} -i "${input}"`;
  // output
  cmd += ` -preset ${preset} -t ${time} -r ${frameRate} ${output}`;

  return cmd;
}

function ffprobe({
  input,
}) {
  // base
  let cmd = 'ffprobe -loglevel error';
  // input
  cmd += ` -i "${input}"`;
  // output
  cmd += ' -show_streams -show_format -print_format json';

  return cmd;
}

module.exports = {
  ffmpeg,
  ffprobe,
};
