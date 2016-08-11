import React, { PropTypes } from 'react'
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

const ProjectQuickAddForm = ({

}) => {
  return (
    <form style={{padding: 5}}>
      <FormGroup controlId="evId">
         <ControlLabel>evId</ControlLabel>
         <FormControl
           type="text"
           placeholder="Enter text"
         />
         <FormControl.Feedback />
         <HelpBlock></HelpBlock>
       </FormGroup>
    </form>
  )
}

export default ProjectQuickAddForm
