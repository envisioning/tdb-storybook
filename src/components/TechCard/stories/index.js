import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TechCard from '../';

storiesOf('Technology Card', module)
  .add('default card', () => (
    <TechCard />
  ))
