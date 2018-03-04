import React from 'react';

const Icon = ({ name, size = 1 }) => (
  <img className={`Icon -x${size}`} src={`./icon/${name}.svg`} alt={name} />
);

export default Icon;
