import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import SearchMetadata from './';


storiesOf('SearchMetadata', module)
  .add('default', () => (
    <SearchMetadata
      took={100}
      total={150}
      showing={125}
    />
  ))
