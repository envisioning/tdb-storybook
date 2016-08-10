import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TechFilterForm from './';

storiesOf('TechFilterForm', module)
  .add('default', () => (
    <TechFilterForm
      status={['draft']}
      onChangeStatus={() => console.log('onChangeStatus')}
      tags={''}
      onChangeTags={() => console.log('onChangeTags')}
      readinessNumber={[1, 5]}
      onChangeReadinessNumber={() => console.log('onChangeReadinessNumber')}
    />
  ))
