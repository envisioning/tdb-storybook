import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Panel from './';

storiesOf('Panel', module)
  .add('300x300', () => (
    <Panel
      header={ <h2> This is the header </h2> }>
      <div style={{
        height: 300,
        width: 300
      }}> This is the body </div>
    </Panel>
  ))
