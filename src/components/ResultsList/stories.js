import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ResultsList from './';
import { mockA } from '../CardGrid/mock';
import { getCardUrl, getCloudinaryPath } from '../../utils/cloudinary_url'
const results = mockA.slice(0, 10).map(res => ({...res, image: getCardUrl(getCloudinaryPath(res.image))}));

storiesOf('Results List', module)
  .add('default', () => (
    <ResultsList
      results={results}
    />
  ))
  .add('with highlight', () => (
    <ResultsList
      highlight="AI"
      results={results}
    />
  ))
  .add('no items', () => (
    <ResultsList
      results={[]}
    />
  ))
