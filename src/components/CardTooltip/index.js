import React, { PropTypes } from 'react';
import ReactTooltip from 'react-tooltip';

const CardTooltip = ({
  id,
  icon,
  tooltipText,
  text,
  onClick
}) => {
  return (
      <button className="btn btn-xs btn-outline btn-primary" data-tip data-for={id} onClick={() => onClick && onClick()}>
        {icon && <i className={icon}></i>} {text}
        <ReactTooltip id={id} effect='solid'>
          <span>{tooltipText}</span>
        </ReactTooltip>
      </button>
  );
};

export default CardTooltip;
