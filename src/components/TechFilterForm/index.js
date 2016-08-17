import React, { PropTypes } from 'react'
import Select from 'react-select';
import Slider from 'rc-slider';
import { Form, FormGroup, ControlLabel, Col } from 'react-bootstrap';

const STATUS_OPTIONS = [
  { value: 'draft', label: 'Draft' },
  { value: 'review', label: 'Review' },
  { value: 'published', label: 'Published' }
];
const READINESS_MIN = 0;
const READINESS_MAX = 5;

const TechFilterForm = ({
  onChange,
  filter
}) => {
  const {
    status,
    tags,
      readinessNumber = [0, 5]
  } = filter.toObject()
  return (
    <Form horizontal style={{padding: 10}}>
      <FormGroup>
        <Col componentClass={ControlLabel} sm={2}>
          Status
        </Col>
        <Col sm={10}>
          <Select
            name="status"
            multi={true}
            options={STATUS_OPTIONS}
            value={status}
            onChange={(v) => {
              const newStatus = v ? v.map(opt => opt.value) : null
              onChange({
                status: newStatus,
                tags,
                readinessNumber
              })
            }}
          />
        </Col>
      </FormGroup>
      <FormGroup>
        <Col componentClass={ControlLabel} sm={2}>
          Tags
        </Col>
        <Col sm={10}>
          <Select
            allowCreate={true}
            name="tags"
            multi={true}
            value={tags}
            onChange={(v) => {
              const newTags = v.value
              onChange({
                tags: newTags,
                status,
                readinessNumber
              })
            }}
          />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col componentClass={ControlLabel} sm={2}>
          Readiness
        </Col>
        <Col sm={10} style={{paddingTop: 14, paddingLeft: 25, paddingRight: 25}}>
          <Slider
            name="readinessNumber"
            range
            dots
            step={1}
            value={readinessNumber}
            min={READINESS_MIN}
            max={READINESS_MAX}
            onChange={(v) => {
              const newReadinessNumber = v
              onChange({
                readinessNumber: newReadinessNumber,
                tags,
                status
              })
            }}
          />
        </Col>
      </FormGroup>
    </Form>
  )
}

export default TechFilterForm
