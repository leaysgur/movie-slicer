import React from 'react';

import { Time, Byte } from './formatter';

export const InfoLabelColumn = () => (
  <React.Fragment>
    <div>Container</div>
    <div>Codecs</div>
    <div>Size</div>
    <div>Duration</div>
    <div>Resolution</div>
    <div>Bitrate</div>
    <div>Framerate</div>
  </React.Fragment>
);

export const InfoColumn = ({
  container,
  videoCodec,
  audioCodec,
  size,
  duration,
  bitRate,
  resolutionWidth,
  resolutionHeight,
  frameRate,
}) => (
  <React.Fragment>
    <div>{container}</div>
    <div>{videoCodec}, {audioCodec}</div>
    <div><Byte byte={size} unit="M" />B</div>
    <div><Time sec={duration} /></div>
    <div>{resolutionWidth} x {resolutionHeight}</div>
    <div><Byte byte={bitRate} unit="M" />bps</div>
    <div>{frameRate}fps</div>
  </React.Fragment>
);
