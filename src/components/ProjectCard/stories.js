import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ProjectCard from './';

storiesOf('Project Card', module)
  .add('default', () => (
    <ProjectCard
      _id={'abc'}
      status={'open'}
      description={'This is a description'}
      evId={'1234'}
      name={'Future of Medicine'}
      image={'http://placehold.it/300x200'}
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
