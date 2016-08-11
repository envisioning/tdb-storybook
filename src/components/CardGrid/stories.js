import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ResultsGrid from './'
import { mockA } from './mock.js';
import { getCardUrl, getCloudinaryPath } from '../../utils/cloudinary_url'

const results = mockA.map(res => {
  return {...res, image: getCardUrl(getCloudinaryPath(res.image))}
})
storiesOf('Card Grid', module)
  .add('100 items, 100 on the server', () => (
    <ResultsGrid
      highlight={'dro'}
      results={results}
      total={100}
      onLoadMore={action('load more')}
      />
  ))
  .add('100 items, 300 on the server', () => (
    <ResultsGrid
      highlight={'dro'}
      results={results}
      total={300}
      onLoadMore={action('load more')}
      />
  ))
  .add('highlighting \"Active\"', () => (
    <ResultsGrid
      highlight={'Active'}
      results={results}
      total={300}
      onLoadMore={action('load more')}
      />
  ))
