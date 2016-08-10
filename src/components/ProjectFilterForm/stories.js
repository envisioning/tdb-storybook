import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ProjectFilterForm from './';

storiesOf('ProjectFilterForm', module)
  .add('default', () => (
    <ProjectFilterForm
      status={['draft']}
      onChangeStatus={() => console.log('onChangeStatus')}
    />
  ))
