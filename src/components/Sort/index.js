import React, { PropTypes } from 'react'
import { FormGroup, InputGroup, Button, FormControl } from 'react-bootstrap'
import { SortAscendent , SortDescendent } from '../../resources/icons'
import Select from 'react-select'
const Sort = ({
  options,
  value,
  direction,
  onChangeDirection,
  onChange
}) => {
  return (
    <FormGroup>
      <InputGroup>
        {/*<FormControl type="text" />*/}

        <Select
            name="form-field-name"
            value={value}
            options={options}
            onChange={onChange}
        />
        <InputGroup.Button>
          <Button bsStyle={direction === 'asc' ? 'success' : 'default'}>
            <SortAscendent />
          </Button>
          <Button bsStyle={direction === 'desc' ? 'success' : 'default'}>
            <SortDescendent />
          </Button>
        </InputGroup.Button>
      </InputGroup>
    </FormGroup>
  )
}

export default Sort
