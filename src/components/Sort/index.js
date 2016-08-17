import React, { PropTypes } from 'react'
import { FormGroup, InputGroup, Button, FormControl } from 'react-bootstrap'
import { SortAscendent , SortDescendent } from '../../resources/icons'
import Select from 'react-select'
const Sort = ({
  options,
  onChange,
  sort
}) => {
  const {
    direction,
    criteria
  } = sort.toObject()
  return (
    <FormGroup>
      <InputGroup>
        {/*<FormControl type="text" />*/}

        <Select
          style={{borderRadius: 0}}
            name="criteria"
            value={criteria}
            options={options}
            onChange={(v) => {
              const newCriteria = v.value;
              onChange({
                criteria: newCriteria,
                direction: direction ? direction : 'asc'
              })
            }}
        />
        <InputGroup.Button>
          <Button
            style={{height: 36}}
            bsStyle={direction === 'asc' ? 'primary' : 'default'}
            onClick={() => {
              if (!criteria) return;
              onChange({
                direction: 'asc',
                criteria
              })
            }}
          >
            <SortAscendent />
          </Button>
          <Button
            style={{height: 36}}
            bsStyle={direction === 'desc' ? 'primary' : 'default'}
            onClick={() => {
              if (!criteria) return;
              onChange({
                direction: 'desc',
                criteria
              })
            }}
          >
            <SortDescendent />
          </Button>
        </InputGroup.Button>
      </InputGroup>
    </FormGroup>
  )
}

export default Sort
