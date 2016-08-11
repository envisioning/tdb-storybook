import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import BuildRelation from './';
import { Technologies, Organizations } from '../../resources/icons'
import { mockA } from '../CardGrid/mock';
import { getCardUrl, getCloudinaryPath } from '../../utils/cloudinary_url'
const results = mockA.slice(0, 10).map((res, i) => ({
  ...res,
  image: getCardUrl(getCloudinaryPath(res.image)),
  relationMade: i % 2 === 0
}));

storiesOf('Build Relation', module)
  .add('default', () => (
    <BuildRelation
      hostIconElement={<Technologies />}
      foreignIconElement={<Organizations />}
      results={results}
      searchText={'searching'}
      createButtonText={'Create new Organization'}
      onCreateClick={action('on create click')}
    />
  ))
  .add('displaying form', () => (
    <BuildRelation
      hostIconElement={<Technologies />}
      foreignIconElement={<Organizations />}
      results={results}
      searchText={'searching'}
      createButtonText={'Create new Organization'}
      onCreateClick={action('on create click')}
      displayForm={true}
      onClickBackFromForm={action('back from form')}
      onSubmitForm={action('submitting form')}
    />
  ))
  .add('no results', () => (
    <BuildRelation
      hostIconElement={<Technologies />}
      foreignIconElement={<Organizations />}
      results={[]}
      searchText={'searching'}
      createButtonText={'Create new Organization'}
      onCreateClick={action('onCreateClick')}
    />
  ))
