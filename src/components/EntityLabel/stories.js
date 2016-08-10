import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import EntityLabel from './';

storiesOf('Entity Label', module)
  .add('project', () => (
    <EntityLabel
      type={'projects'}
      text='Um Projeto'
    />
  ))
  .add('attachment', () => (
    <EntityLabel
      type={'attachments'}
      text='Um Attachment'
    />
  ))
  .add('organizations', () => (
    <EntityLabel
      type={'organizations'}
      text='Uma Organization'
    />
  ))
  .add('technology draft', () => (
    <EntityLabel
      type={'technologies'}
      text='Uma tecnologia'
      status={'draft'}
    />
  ))
  .add('technology review', () => (
    <EntityLabel
      type={'technologies'}
      text='Uma tecnologia'
      status={'review'}
    />
  ))
  .add('technology published', () => (
    <EntityLabel
      type={'technologies'}
      text='Uma tecnologia'
      status={'published'}
    />
  ))
  .add('technology with really long name', () => (
    <EntityLabel
      type={'technologies'}
      text='Uma tecnologia com um nome muito grande pode causar problemas por isso é melhor truncá-la'
      status={'published'}
    />
  ))
  .add('technology with really long name and truncated', () => (
    <EntityLabel
      type={'technologies'}
      text='Uma tecnologia com um nome muito grande pode causar problemas por isso é melhor truncá-la'
      status={'published'}
      truncate={true}
      style={{width: 200}}
    />
  ))
