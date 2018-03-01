function ffmpeg({
  startSec,
  input,
  preset,
  time,
  frameRate,
  outputDir,
}) {
  // base
  let cmd = 'ffmpeg -hide_banner';
  // input
  cmd += ` -ss ${startSec} -i ${input}`;
  // output
  const outPath = `${outputDir}/${startSec}-${startSec + time}.mp4`;
  cmd += ` -preset ${preset} -t ${time} -r ${frameRate} ${outPath}`;

  return cmd;
}

module.exports = {
  ffmpeg,
};
