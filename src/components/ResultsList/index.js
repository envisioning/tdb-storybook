import React, { PropTypes } from 'react'
import { ListGroup } from 'react-bootstrap';
import ResultsListItem from '../ResultsListItem';

import Infinite from 'react-infinite';

const ResultsList = ({
  results,
  highlight,
  style,
  ...props
}) => {
  return (
    <ListGroup style={style} {...props}>
      <Infinite
        containerHeight={400}
        elementHeight={100}
        infiniteLoadBeginEdgeOffset={300}
        loadingSpinnerDelegate={<div>Loading...</div>}
        onInfiniteLoad={() => console.log('infinite')}
      >
        {
          results.map((result, i) => (
            <ResultsListItem
              style={{height: 100}}
              highlight={highlight}
              key={i}
              {...result} />
          ))
        }
      </Infinite>
    </ListGroup>
  )
}

ResultsList.propTypes = {
  results: PropTypes.array,
  highlight: PropTypes.string
}

export default ResultsList
