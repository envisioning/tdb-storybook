import React, { PropTypes } from 'react'
import { FormGroup, ControlLabel, HelpBlock, FormControl, Button} from 'react-bootstrap';
import Select from 'react-select';


const ROLE_OPTIONS = [
  { value: 'admin', label: 'Administrator' },
  { value: 'researcher', label: 'Researcher' },
  { value: 'viewer', label: 'Viewer' }
];

const InviteUserForm = ({

}) => {
  return (
    <form>
      <FormGroup controlId="email">
        <ControlLabel>Email</ControlLabel>
        <FormControl
          type="text"
          placeholder="Email"
          />
        <FormControl.Feedback />
        <HelpBlock>Email to send the invite</HelpBlock>
      </FormGroup>
      <FormGroup controlId="role">
        <ControlLabel>Role</ControlLabel>
        <Select
          name="role"
          options={ROLE_OPTIONS}
          />
        <FormControl.Feedback />
        <HelpBlock>What group does this user belongs to?</HelpBlock>
      </FormGroup>
      <FormGroup controlId="submit" style={{textAlign: 'right'}}>
        <Button bsStyle='success'>Invite</Button>
      </FormGroup>
    </form>
  )
}

export default InviteUserForm
