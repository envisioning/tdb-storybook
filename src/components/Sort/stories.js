import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Sort from './';

storiesOf('Sort', module)
  .add('default', () => (
    <Sort
      options={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' }
      ]}
      value={'one'}
      direction={'asc'}
    />
  ))
