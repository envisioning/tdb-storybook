import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import FileInput from './';

storiesOf('FileInput', module)
  .add('default', () => (
    <FileInput
      showProgress={true}
      progress={10}
      />
  ))
