import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Panel, PanelHeader, PanelBody, PanelTitle } from './';
import { Technologies } from '../../resources/icons'

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
  .add('Panel', () => (
    <Panel>
      <div>
        This is an empty panel
      </div>
    </Panel>
  ))
  .add('PanelTitle', () => (
      <PanelTitle
        title="This is my title">
      </PanelTitle>
  ))
  .add('PanelTitle with Left Icon', () => (
      <PanelTitle
        iconElementLeft={<Technologies />}
        title="This is my title">
      </PanelTitle>
  ))
  .add('PanelHeader', () => (
      <PanelHeader
        title={<h2>This is an <b>h2</b> header</h2>}>
      </PanelHeader>
  ))
  .add('PanelHeader with title as PanelTitle', () => (
      <PanelHeader
        title={<PanelTitle
          iconElementLeft={<Technologies />}
          title="This is a PanelTitle" />}>
      </PanelHeader>
  ))
  .add('PanelBody', () => (
      <PanelBody>
        This is the body
      </PanelBody>
  ))
  .add('Panel with Header and Body', () => (
    <Panel>
      <PanelHeader
        title={<h2>Header Lorem Ipsum</h2>}>
      </PanelHeader>
      <PanelBody>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </PanelBody>
    </Panel>
  ))
