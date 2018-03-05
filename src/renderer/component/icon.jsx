import React from 'react';

const Icon = ({ name, size = 'm', onClick }) => {
  const Icon = <img className={`Icon -${size}`} src={`./icon/${name}.svg`} alt={name} />;
  if (typeof onClick === 'function') {
    return (
      <button className={`IconButton -${size}`} onClick={() => onClick()}>
        {Icon}
      </button>
    );
  }

  return Icon;
};

export default Icon;
