import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap';
import styles from './styles';


const MyComponent = (props) => {
  return (
    <Button bsStyle="success" style={styles.button}>Boa</Button>
  )
}

export default MyComponent
