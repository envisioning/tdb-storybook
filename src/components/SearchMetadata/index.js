import React, { PropTypes } from 'react'

const SearchMetadata = ({
  total,
  showing,
  took
}) => {
  return (
    <div className="metadata">
      <i>
        took: <b>{took} ms</b>,
        total: <b>{total}</b> results,
        showing: <b>{showing}</b> results,
      </i>
    </div>
  )
}

export default SearchMetadata
