import React from 'react';

export const Time = ({ sec = 0 }) => (
  <span>{formatTime(sec)}</span>
);

export const Byte = ({ byte = 0, unit }) => (
  <span>{formatByte(byte, unit)}</span>
);

function formatTime(sec) {
  const seconds = parseInt(sec, 10);

  const h = Math.floor(seconds / 3600);
  const m = Math.floor(seconds / 60) % 60;
  const s = Math.floor(seconds) % 60;

  const hh = `0${h}`.slice(-2);
  const mm = `0${m}`.slice(-2);
  const ss = `0${s}`.slice(-2);

  return `${hh}:${mm}:${ss}`;
}

function formatByte(byte = 0, unit) {
  let size;
  switch (unit) {
    case 'K':
      size = byte / 1000;
      break;
    case 'M':
      size = byte / 1000 / 1000;
      break;
    case 'G':
      size = byte / 1000 / 1000 / 1000;
      break;
    default:
      size = byte;
  }

  return `${size.toFixed(2)}${unit}`;
}
