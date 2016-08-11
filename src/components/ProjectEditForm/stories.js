import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ProjectEditForm from './';

storiesOf('ProjectEditForm', module)
  .add('default', () => (
    <ProjectEditForm />
  ))
