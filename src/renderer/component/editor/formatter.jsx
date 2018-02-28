import React from 'react';

export const Time = ({ sec }) => (
  <span>{formatTime(sec)}</span>
);

export const Byte = ({ byte, unit }) => (
  <span>{formatByte(byte, unit)}B</span>
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

function formatByte(byte, unit) {
  if (unit === 'M') {
    return `${byte / 1000}M`;
  }
  return byte;
}
