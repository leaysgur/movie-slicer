import React from 'react';

const Icon = ({ name, size = 'm', anim = 'none', disabled = false, onClick }) => {
  const Icon = <img className={`Icon -${size} -${anim}`} src={`./icon/${name}.svg`} alt={name} />;
  if (typeof onClick === 'function') {
    return (
      <button className={`IconButton -${size}`} onClick={ev => onClick(ev)} disabled={disabled}>
        {Icon}
      </button>
    );
  }

  return Icon;
};

export default Icon;
