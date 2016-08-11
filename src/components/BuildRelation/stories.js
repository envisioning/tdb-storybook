import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import BuildRelation from './';
import { Technologies, Organizations } from '../../resources/icons'
import { mockA } from '../CardGrid/mock';
import { getCardUrl, getCloudinaryPath } from '../../utils/cloudinary_url'
const results = mockA.slice(0, 30).map((res, i) => ({
  ...res,
  image: getCardUrl(getCloudinaryPath(res.image)),
}));

const resultsLeft = results.filter((a, i) => i % 2 === 0)
const resultsRight = results.filter((a, i) => i % 2 !== 0)
storiesOf('Build Relation', module)
  .add('default', () => (
    <BuildRelation
      hostIconElement={<Technologies />}
      foreignIconElement={<Organizations />}
      resultsLeft={resultsLeft}
      resultsRight={resultsRight}
      searchText={'searching'}
      createButtonText={'Create new Organization'}
      onCreateClick={action('on create click')}
    />
  ))
  .add('displaying form', () => (
    <BuildRelation
      hostIconElement={<Technologies />}
      foreignIconElement={<Organizations />}
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
      resultsLeft={[]}
      resultsRight={resultsRight}
      searchText={'searching'}
      createButtonText={'Create new Organization'}
      onCreateClick={action('onCreateClick')}
    />
  ))
