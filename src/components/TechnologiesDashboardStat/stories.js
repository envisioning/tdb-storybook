import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TechnologiesDashboardStat from './';

storiesOf('TechnologiesDashboardStat', module)
  .add('Default', () => (
    <TechnologiesDashboardStat
      addLink={'#'}
      total={500}
      published={100}
      reviewed={200}
      drafts={200}
      newest={"Drone Delivery"}
      newestLink={"#"}
      />
  )
 )
