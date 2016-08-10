import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import AttachmentCard from './';

storiesOf('Attachment Card', module)
  .add('default', () => (
    <AttachmentCard
      style={{width: 300}}
      _id={'abc'}
      type={'article'}
      description={'this is a description'}
      name={'Github - Where software is built'}
      highlight={''}
      technologiesCount={9}
      organizationsCount={12}
      projectsCount={3}
      from={'web'}
      web={null}
      file={null}

      editLink={'#'}
      entryLink={'#'}
      onClickViewEntry={() => console.log('onClickViewEntry')}
    />
  ))
