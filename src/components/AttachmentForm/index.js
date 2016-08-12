import React, { PropTypes } from 'react'
import { FormGroup, ControlLabel, HelpBlock, FormControl, Button} from 'react-bootstrap';
import Select from 'react-select';

import { ATTACHMENTS_TYPES } from '../../resources/options'
const AttachmentForm = ({
  onSubmit
}) => {
  return (
    <form onSubmit={onSubmit}>
      <FormGroup controlId="title">
        <ControlLabel>Title</ControlLabel>
        <FormControl
          type="text"
          placeholder=""
          />
        <FormControl.Feedback />
      </FormGroup>
      <FormGroup controlId="title">
        <ControlLabel>Title</ControlLabel>
        <FormControl
          type="text"
          placeholder=""
          />
        <FormControl.Feedback />
      </FormGroup>
      <FormGroup controlId="status">
        <ControlLabel>Type</ControlLabel>
        <Select options={ATTACHMENTS_TYPES} />
        <FormControl.Feedback />
      </FormGroup>

      <FormGroup controlId="submit" style={{textAlign: 'right'}}>
        <Button bsStyle='primary'>Create</Button>
      </FormGroup>
    </form>
  )
}

export default AttachmentForm
