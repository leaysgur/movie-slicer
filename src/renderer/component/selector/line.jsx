import React from 'react';
import { observer } from 'mobx-react';

const SelectorLine = ({ movie, ui }) => {
  const selectorLineWidth = Math.min(1, ui.pxAs1Sec);
  const selectorLineLeft = (ui.pxAs1Sec * movie.currentTimeDisp) - selectorLineWidth / 2;
  return (
    <div
      className="Selector_Line"
      style={{ width: `${selectorLineWidth}px`, left: `${selectorLineLeft}px` }}
    />
  );
};

export default observer(SelectorLine);
