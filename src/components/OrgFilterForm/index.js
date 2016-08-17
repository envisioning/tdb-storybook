
import React, { PropTypes } from 'react'
import Select from 'react-select';
import Slider from 'rc-slider';
import { FormGroup } from 'react-bootstrap';
import { ORGANIZATIONS_TYPES } from '../../resources/options';


const OrgFilterForm = ({
  filter,
  onChange,
}) => {
  const { type } = filter.toObject();
  return (
    <form style={{padding: 10}}>
      <FormGroup>
        <label htmlFor="type">Type</label>
        <Select
          name="type"
          multi={true}
          options={ORGANIZATIONS_TYPES}
          value={type}
          onChange={(v) => {
            const newType = v ? v.map(opt => opt.value) : null
            onChange({
              type: newType,
            })
          }}
        />
      </FormGroup>
    </form>
  )
}

export default OrgFilterForm;
