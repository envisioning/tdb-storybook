import React, { PropTypes } from 'react'
import _ from 'lodash';
import { Search, Error, Loading, Filter } from '../../resources/icons'
import { Button, FormGroup, InputGroup, FormControl } from 'react-bootstrap';

const SearchInput = ({
  value,
  loading,
  error,
  onIconClick,
  onFilterClick,
  onChange
}) => {
  onChange = _.debounce(onChange, 250)
  let iconElement;

  if (error === true) {
    iconElement = <Error/>
  } else if (loading === true) {
    iconElement =  <Loading spin />;
  } else {
    iconElement =  <Search  />;
  }


  return (
    <div>
      <FormGroup>
        <InputGroup>
          <InputGroup.Addon onClick={onIconClick}>
            {iconElement}
          </InputGroup.Addon>
          <FormControl type="text" onChange={onChange}/>

          <InputGroup.Button>
          <Button bsStyle="success" onClick={onFilterClick}>
            <Filter />
          </Button>
        </InputGroup.Button>

        </InputGroup>
      </FormGroup>
    </div>
  )
}

export default SearchInput
