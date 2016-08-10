import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import AttachmentsFilterForm from './';

storiesOf('AttachmentsFilterForm', module)
  .add('default', () => (
    <AttachmentsFilterForm
      status={['draft']}
      onChangeStatus={() => console.log('onChangeStatus')}
    />
  ))
