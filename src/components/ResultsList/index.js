import React, { PropTypes } from 'react'
import { ListGroup } from 'react-bootstrap';
import ResultsListItem from '../ResultsListItem';
const ResultsList = ({
  results,
  highlight
}) => {
  return (
    <ListGroup>
      {
        results.map((result, i) => (
          <ResultsListItem
            highlight={highlight}
            key={i}
            {...result} />
        ))
      }

    </ListGroup>
  )
}

ResultsList.propTypes = {
  results: PropTypes.array,
  highlight: PropTypes.string
}

export default ResultsList
