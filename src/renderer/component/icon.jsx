import React from 'react';

const Icon = ({ name, size = 'm' }) => (
  <img className={`Icon -${size}`} src={`./icon/${name}.svg`} alt={name} />
);

export default Icon;
