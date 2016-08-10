import React, { PropTypes } from 'react'
import Select from 'react-select';
import Slider from 'rc-slider';
import { FormGroup } from 'react-bootstrap';

const STATUS_OPTIONS = [
  { value: 'draft', label: 'Draft' },
  { value: 'review', label: 'Review' },
  { value: 'published', label: 'Published' }
];
const READINESS_MIN = 0;
const READINESS_MAX = 5;

const TechFilterForm = ({
  status,
  onChangeStatus,
  tags,
  onChangeTags,
  readinessNumber,
  onChangeReadinessNumber
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
      <FormGroup>
        <label htmlFor="tags">Tags</label>
        <Select
          allowCreate={true}
          name="tags"
          multi={true}
          value={tags}
          onChange={onChangeTags}
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="readinessNumber">Readiness</label>
        <Slider
          name="readinessNumber"
          range
          dots
          step={1}
          value={[readinessNumber[0], readinessNumber[1]]}
          min={READINESS_MIN}
          max={READINESS_MAX}
          onChange={onChangeReadinessNumber}
        />
      </FormGroup>
    </form>
  )
}

export default TechFilterForm
