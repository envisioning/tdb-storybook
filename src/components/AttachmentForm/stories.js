import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import AttachmentForm from './';

storiesOf('AttachmentForm', module)
  .add('default', () => (
    <AttachmentForm />
  ))
