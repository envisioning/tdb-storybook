
import React, { PropTypes } from 'react'
import Select from 'react-select';
import Slider from 'rc-slider';
import { FormGroup } from 'react-bootstrap';

const TYPE_OPTIONS = [
  { value: 'academic', label: 'Academic' },
  { value: 'non-profit', label: 'Non-Profit' },
  { value: 'governamental', label: 'Governamental' },
  { value: 'private', label: 'Private' }
];

const OrgFilterForm = ({
  type,
  onChangeType,
}) => {
  return (
    <form style={{padding: 10}}>
      <FormGroup>
        <label htmlFor="type">Type</label>
        <Select
          name="type"
          multi={true}
          options={TYPE_OPTIONS}
          value={type}
          onChange={onChangeType}
        />
      </FormGroup>
    </form>
  )
}

export default OrgFilterForm;
