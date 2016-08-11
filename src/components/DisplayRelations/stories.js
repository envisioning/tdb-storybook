import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import DisplayRelation from './';
import { Technologies } from '../../resources/icons'
import { mockA } from '../CardGrid/mock';
import { getCardUrl, getCloudinaryPath } from '../../utils/cloudinary_url'
const results = mockA.slice(0, 10).map(res => ({...res, image: getCardUrl(getCloudinaryPath(res.image))}));

storiesOf('Display Relation', module)
  .add('default', () => (
    <DisplayRelation
      iconElement={<Technologies />}
      title={'Related Technologies'}
      onClickBuildRelation={() => console.log('onClickBuildRelation')}
      results={results}
    />
  ))
  .add('no relations created', () => (
    <DisplayRelation
      iconElement={<Technologies />}
      title={'Related Technologies'}
      onClickBuildRelation={() => console.log('onClickBuildRelation')}
      results={[]}
    />
  ))
