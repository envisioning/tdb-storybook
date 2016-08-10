import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ProjectsDashboardStat from './';

storiesOf('ProjectsDashboardStat', module)
  .add('Default', () => (
    <ProjectsDashboardStat
      addLink={'#'}
      total={10}
      active={2}
      prospecting={3}
      closed={5}
      newest={"Zero Hunger"}
      newestLink={"#"}
      />
  )
 )
