import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import MyComponent from '../';

storiesOf('MyComponent', module)
  .add('with text', () => (
    <MyComponent />
  ))
  .add('with no text', () => (
    <MyComponent />
  ));
