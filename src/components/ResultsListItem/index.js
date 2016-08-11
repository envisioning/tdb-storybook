import React, { PropTypes } from 'react'
import Highlight from 'react-highlighter';
import { ListGroupItem } from 'react-bootstrap';
import SafeImage from '../SafeImage';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    //height: 75
  },
  imageContainer: {
    width: 75
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    overflow: 'hidden'
  },
  buttonContainer: {
    width: 100
  },
  image: {
    width: 75,
    height: 75
  },
  name: {
    margin: 0
  },
  description: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical'
  },
}
const ResultsListItem = ({
  name,
  image,
  description,
  highlight = '',
  buttonRightElement
}) => {
  return (
    <ListGroupItem style={styles.container}>
      <div style={styles.imageContainer}>
        <SafeImage src={image} style={styles.image} />
      </div>
      <div style={styles.textContainer}>
        <h2 style={styles.name}>
          <Highlight search={highlight}>
            {name}
          </Highlight>
        </h2>
        <span style={styles.description}>
          <Highlight search={highlight}>
            {description}
          </Highlight>
        </span>
      </div>
      <div style={styles.textContainer}>
        {buttonRightElement}
      </div>
    </ListGroupItem>
  )
}

ResultsListItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  highlight: PropTypes.string,
  buttonRightElement: PropTypes.element
}
export default ResultsListItem
