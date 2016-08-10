import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import OrgCard from './';
import { getCloudinaryPath, getCardUrl} from '../../utils/cloudinary_url'

storiesOf('Organization Card', module)
  .add('default', () => (
    <OrgCard
      style={{width: 300}}
      _id={'abc'}
      type={'governamental'}
      logo={getCardUrl(getCloudinaryPath('ePKXLDsc54QybCHTB'))}
      description={'this is a short description'}
      name={'Apple'}
      highlight={''}
      technologiesCount={0}
      projectsCount={12}
      attachmentsCount={23}
      editLink={'#'}
      entryLink={'#'}
      onClickViewEntry={() => console.log('click view entry')}
    />
  ))
