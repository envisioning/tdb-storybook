import React, { PropTypes } from 'react'
import { PanelBody } from '../Panel'
import SearchInput from '../SearchInput'
import TechFilterForm from '../TechFilterForm'
import CardGrid from '../CardGrid'
import Sort from '../Sort'
import { Grid, Row, Col } from 'react-bootstrap'
import SearchMetadata from '../SearchMetadata'

const SearchLayout = ({
  searchText,
  loading,
  error,
  onIconClick,
  onToggleAdvancedSearch,
  onChangeSearchText,
  onChangeSort,
  onChangeFilter,
  onLoadMore,
  results,
  showAdvancedSearch,
  filter,
  sort,
  filterElement,
  sortElement,
  metadata,
}) => {
  console.log(loading)
  return (
    <PanelBody>
      <SearchInput
        value={searchText}
        loading={loading}
        error={error}
        onIconClick={onIconClick}
        onFilterClick={onToggleAdvancedSearch}
        onChange={onChangeSearchText}
        />
      <SearchMetadata {...metadata.toObject()} showing={results.size} />
      {
        showAdvancedSearch &&
        <Grid fluid={true} style={{ marginBottom: 30}}>
          <Row>
            <Col mdOffset={4} md={4}>
              <h5>Sorting</h5>
              {React.cloneElement(sortElement, {
                sort,
                onChange: onChangeSort
              })}
            </Col>
            <Col md={4}>
              <h5>Filtering</h5>
              {React.cloneElement(filterElement, {
                filter,
                onChange: onChangeFilter
              })}
            </Col>
          </Row>
        </Grid>
      }

      <CardGrid
        highlight={searchText}
        total={metadata.get('total')}
        onLoadMore={onLoadMore}
        loading={loading}
        results={results}/>

    </PanelBody>
  )
}

export default SearchLayout
