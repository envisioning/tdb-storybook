import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Panel from './';

const longContent = <div>
  A<br />
  A<br />
  A<br />
  A<br />
  A<br />
  A<br />
  A<br />
  A<br />
  A<br />
  A<br />
  A<br />
  A<br />
  A<br />
  A<br />
  A<br />
  A<br />
  A<br />
  A<br />
  A<br />
</div>

storiesOf('Panel', module)
  .add('300x300', () => (
    <Panel
      style={{width: 300, minHeight: 300}}
      header={ <h2> This is the header </h2> }>
      <div>
        This is the body
      </div>

    </Panel>
  ))
  .add('long content', () => (
    <Panel
      style={{width: 300, minHeight: 300}}
      header={ <h2> This is the header </h2> }>
      <div>
        {longContent}
      </div>

    </Panel>
  ))
