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
  if (onChange && typeof onChange === 'function') {
    onChange = _.debounce(onChange, 250)
  }

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
          <Button bsStyle="primary" onClick={onFilterClick}>
            <Filter />
          </Button>
        </InputGroup.Button>

        </InputGroup>
      </FormGroup>
    </div>
  )
}


SearchInput.propTypes = {
  value: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  onIconClick: PropTypes.func,
  onFilterClick: PropTypes.func,
  onChange: PropTypes.func
}
export default SearchInput
