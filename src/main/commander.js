const path = require('path');

function ffmpeg({
  startSec,
  input,
  preset = 'ultrafast',
  time,
  r = 40,
  o,
}) {
  // base
  let cmd = 'ffmpeg -hide_banner';
  // input
  cmd += ` -ss ${startSec} -i ${input}`;
  // output
  const outPath = o || `${path.dirname(input)}/${startSec}-${startSec + time}.mp4`;
  cmd += ` -preset ${preset} -t ${time} -r ${r} ${outPath}`;

  return cmd;
}

module.exports = {
  ffmpeg,
};
