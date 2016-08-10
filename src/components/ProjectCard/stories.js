import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ProjectCard from './';
import { getCloudinaryPath, getCardUrl} from '../../utils/cloudinary_url'

storiesOf('Project Card', module)
  .add('default', () => (
    <ProjectCard
      style={{width: 300}}
      _id={'abc'}
      status={'open'}
      description={'This is a description'}
      evId={'1234'}
      name={'Future of Medicine'}
      image={getCardUrl(getCloudinaryPath('poymCTdmcJomq6aYX'))}
      collectionsCount={2}
      technologiesStashCount={7}
      attachmentsCount={87}
      highlight={''}
      editLink={'#'}
      entryLink={'#'}

      editLink={'#'}
      entryLink={'#'}
      onClickViewEntry={() => console.log('onClickViewEntry')}
      onConfirmDelete={() => console.log('onConfirmDelete')}
    />
  ))
