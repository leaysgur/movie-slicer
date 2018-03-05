import React from 'react';

const Icon = ({ name, size = 'm', anim = 'none', onClick }) => {
  const Icon = <img className={`Icon -${size} -${anim}`} src={`./icon/${name}.svg`} alt={name} />;
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
