import React, { PropTypes } from 'react';
import ReactTooltip from 'react-tooltip';
import { Button } from 'react-bootstrap'
import styles from './styles'
const CardTooltip = ({
  id,
  icon,
  tooltipText,
  text,
  onClick
}) => {
  return (
      <Button
        style={styles.button} 
        bsStyle="primary"
        bsSize="xsmall"
        data-tip data-for={id}
        onClick={() => onClick && onClick()}>
        {icon && icon} {text}
        <ReactTooltip id={id} effect='solid'>
          <span>{tooltipText}</span>
        </ReactTooltip>
      </Button>
  );
};

export default CardTooltip;
