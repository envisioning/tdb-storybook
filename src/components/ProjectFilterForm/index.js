import React, { PropTypes } from 'react'
import Select from 'react-select';
import Slider from 'rc-slider';
import { FormGroup } from 'react-bootstrap';

const STATUS_OPTIONS = [
  { value: 'open', label: 'Open' },
  { value: 'prospect', label: 'Prospect' },
  { value: 'closed', label: 'Closed' }
];

const ProjectFilterForm = ({
  status,
  onChangeStatus,
}) => {
  return (
    <form style={{padding: 10}}>
      <FormGroup>
        <label htmlFor="status">Status</label>
        <Select
          name="status"
          multi={true}
          options={STATUS_OPTIONS}
          value={status}
          onChange={onChangeStatus}
        />
      </FormGroup>
    </form>
  )
}

export default ProjectFilterForm
