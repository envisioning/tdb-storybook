
import React, { PropTypes } from 'react'
import CardGrid from '../CardGrid'
import { BuildRelation } from '../../resources/icons'
import Panel from '../Panel'

const DisplayRelations = ({
  iconElement,
  title,
  onClickBuildRelation,
  results
}) => {
  return (
    <Panel
      header={<h2>{iconElement} {title} <BuildRelation onClick={onClickBuildRelation}/></h2>} >
      {results.length ?
      <CardGrid
        results={results} />
      :
      <h3 style={{textAlign: 'center', margin: 20}}>
        There are no relations yet. Would you like to <a href="#" onClick={onClickBuildRelation}>create one</a> ?
      </h3>
      }
    </Panel>
  )
}

DisplayRelations.propTypes = {
  iconElement: PropTypes.element,
  title: PropTypes.string,
  onClickBuildRelation: PropTypes.func,
  results: PropTypes.array
}

export default DisplayRelations
