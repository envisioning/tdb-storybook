import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Panel from './';

storiesOf('Panel', module)
  .add('Default', () => (
    <Panel
      header={ <h2> This is the header </h2> }>
      <div> This is the body </div>
    </Panel>
  ))
