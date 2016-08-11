import React, { PropTypes } from 'react'
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import Select from 'react-select';
import DisplayRelation from '../DisplayRelations'
import { Technologies, Projects, Attachments, Organizations } from '../../resources/icons'
import { mockA } from '../CardGrid/mock.js'
import { getCardUrl, getCloudinaryPath } from '../../utils/cloudinary_url'
const technologiesId = mockA.slice(0, 10).map(res => ({...res, image: getCardUrl(getCloudinaryPath(res.image))}));;
const organizationsId = mockA.slice(11, 20).map(res => ({...res, image: getCardUrl(getCloudinaryPath(res.image))}));;
const attachmentsId = mockA.slice(21, 30).map(res => ({...res, image: getCardUrl(getCloudinaryPath(res.image))}));;
const OPTIONS = [
  {
    label: 'LABEL',
    value: 'label'
  },
  {
    label: 'LABEL2',
    value: 'label2'
  },
  {
    label: 'LABEL3',
    value: 'label3'
  }
]
const ProjectEditForm = ({

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

       <FormGroup controlId="url">
         <ControlLabel>URL</ControlLabel>
         <FormControl
           type="text"
           placeholder="Enter text"
         />
         <FormControl.Feedback />
         <HelpBlock></HelpBlock>
       </FormGroup>

       <FormGroup controlId="status">
         <ControlLabel>Status</ControlLabel>
         <Select options={OPTIONS} />
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
       <FormGroup controlId="organizationsId">
         <DisplayRelation
           iconElement={<Organizations />}
           title={'Related Organizations'}
           onClickBuildRelation={() => console.log('onClickBuildRelation')}
           results={organizationsId} />
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

export default ProjectEditForm
