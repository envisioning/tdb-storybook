import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import OrganizationEditForm from './';

import { mockA } from '../CardGrid/mock.js'
import { getCardUrl, getCloudinaryPath } from '../../utils/cloudinary_url'
const technologiesId = mockA.slice(0, 10).map(res => ({...res, image: getCardUrl(getCloudinaryPath(res.image))}));;
const projectsId = mockA.slice(11, 20).map(res => ({...res, image: getCardUrl(getCloudinaryPath(res.image))}));;
const attachmentsId = mockA.slice(21, 30).map(res => ({...res, image: getCardUrl(getCloudinaryPath(res.image))}));;

storiesOf('OrganizationEditForm', module)
  .add('default', () => (
    <OrganizationEditForm
      technologiesId={technologiesId}
      projectsId={projectsId}
      attachmentsId={attachmentsId} />
  ))
