import React, { PropTypes } from 'react'
import { ListGroup, Button } from 'react-bootstrap';
import ResultsListItem from '../ResultsListItem';
import Infinite from 'react-infinite';
import { Scrollbars } from 'react-custom-scrollbars';

const ResultsList = ({
  results,
  highlight,
  showRightButton,
  rightButtonElement,
  style,
  ...props
}) => {


  return (
    <ListGroup style={style} {...props}>
      {/*<Infinite
        containerHeight={400}
        elementHeight={100}
        infiniteLoadBeginEdgeOffset={300}
        loadingSpinnerDelegate={<div>Loading...</div>}
        onInfiniteLoad={() => console.log('infinite')}
      >*/}
      <Scrollbars autoHeight autoHeightMin={500}>
        {
          results.map((result, i) => (
            <ResultsListItem
              style={{height: 100}}
              highlight={highlight}
              rightButtonElement={rightButtonElement}
              key={i}
              {...result} />
          ))
        }
        </Scrollbars>
      {/*</Infinite>*/}

    </ListGroup>
  )
}

ResultsList.propTypes = {
  results: PropTypes.array,
  highlight: PropTypes.string
}

export default ResultsList
