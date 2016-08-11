import React, { PropTypes } from 'react'
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import Select from 'react-select';
import DisplayRelation from '../DisplayRelations'
import { Technologies, Projects, Attachments, Organizations } from '../../resources/icons'
import { ORGANIZATIONS_TYPES, COUNTRIES } from '../../resources/options'

const OrganizationEditForm = ({
  technologiesId,
  projectsId,
  attachmentsId
}) => {
  return (
    <form style={{padding: 5}}>
      <FormGroup controlId="name">
         <ControlLabel>Name</ControlLabel>
         <FormControl
           type="text"
           placeholder="Enter text"
         />
         <FormControl.Feedback />
         <HelpBlock></HelpBlock>
       </FormGroup>

       <FormGroup controlId="description">
         <ControlLabel>Description</ControlLabel>
         <FormControl
           type="text"
           placeholder="Enter text"
         />
         <FormControl.Feedback />
         <HelpBlock></HelpBlock>
       </FormGroup>

       <FormGroup controlId="foundingYear">
         <ControlLabel>Founding year</ControlLabel>
         <FormControl
           type="text"
           placeholder="Enter text"
         />
         <FormControl.Feedback />
         <HelpBlock></HelpBlock>
       </FormGroup>

       <FormGroup controlId="country">
         <ControlLabel>Country</ControlLabel>
        <Select options={COUNTRIES} />
         <FormControl.Feedback />
         <HelpBlock></HelpBlock>
       </FormGroup>

       <FormGroup controlId="type">
         <ControlLabel>Type</ControlLabel>
         <Select options={ORGANIZATIONS_TYPES} />
         <FormControl.Feedback />
         <HelpBlock></HelpBlock>
       </FormGroup>

       <FormGroup controlId="logo">
         <ControlLabel>Logo</ControlLabel>
         <FormControl
           type="text"
           placeholder="Enter text"
         />
         <FormControl.Feedback />
         <HelpBlock></HelpBlock>
       </FormGroup>

       <FormGroup controlId="url">
         <ControlLabel>URL</ControlLabel>
         <FormControl
           type="text"
           placeholder="Enter text"
         />
         <FormControl.Feedback />
         <HelpBlock></HelpBlock>
       </FormGroup>

       <FormGroup controlId="technologiesId">
         <DisplayRelation
           iconElement={<Technologies />}
           title={'Related Technologies'}
           onClickBuildRelation={() => console.log('onClickBuildRelation')}
           results={technologiesId} />
       </FormGroup>
       <FormGroup controlId="projectsId">
         <DisplayRelation
           iconElement={<Projects />}
           title={'Related Projects'}
           onClickBuildRelation={() => console.log('onClickBuildRelation')}
           results={projectsId} />
       </FormGroup>
       <FormGroup controlId="attachmentsId">
         <DisplayRelation
           iconElement={<Attachments />}
           title={'Related Attachments'}
           onClickBuildRelation={() => console.log('onClickBuildRelation')}
           results={attachmentsId} />
       </FormGroup>
    </form>
  )
}

export default OrganizationEditForm
