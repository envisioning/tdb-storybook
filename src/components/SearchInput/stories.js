import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import SearchInput from './';


storiesOf('SearchInput', module)
  .add('default', () => (
    <SearchInput
      value={'teste'}
      loading={true}
      error={false}
      onIconClick={() => console.log('onIconClick')}
      onFilterClick={() => console.log('onFilterClick')}
      onChange={() => console.log('onChange')}
    />
  ))
