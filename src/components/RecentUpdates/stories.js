import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import RecentUpdates from './';

storiesOf('Recent Updates', module)
  .add('default', () => (
    <RecentUpdates
    />
  ))
