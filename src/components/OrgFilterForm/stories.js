import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import OrgFilterForm from './';

storiesOf('OrgFilterForm', module)
  .add('default', () => (
    <OrgFilterForm
      status={['draft']}
      onChangeStatus={() => console.log('onChangeStatus')}
    />
  ))
