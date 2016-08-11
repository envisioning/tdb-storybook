import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import InviteUserForm from './';

storiesOf('Invite user form', module)
  .add('default', () => (
    <InviteUserForm />
  ))
