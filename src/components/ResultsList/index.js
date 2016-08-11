import React, { PropTypes } from 'react'
import { ListGroup, Button } from 'react-bootstrap';
import ResultsListItem from '../ResultsListItem';
import Infinite from 'react-infinite';
import { BuildRelation, Remove } from '../../resources/icons'
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
              buttonRightElement={result.relationMade ?
                <Button bsStyle="danger" bsSize="xsmall"><Remove /></Button> :
                <Button bsStyle="success" bsSize="xsmall"><BuildRelation /></Button>
              }
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
