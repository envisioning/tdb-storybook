import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ProjectQuickAddForm from './';

storiesOf('ProjectQuickAddForm', module)
  .add('default', () => (
    <ProjectQuickAddForm />
  ))
