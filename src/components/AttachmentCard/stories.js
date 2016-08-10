import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import AttachmentCard from './';
import { decideDisplayedImage } from '../../utils/attachment_display_image'


const props = {
  from: 'web',
  web: {
    sourceUrl: 'http://techcrunch.com/2014/11/20/airbnb-rolls-out-million-dollar-liability-insurance-program-for-hosts/',
    thumbnailUrl: 'https://tctechcrunch2011.files.wordpress.com/2014/09/airbnb-a8707ed9_original.jpg?w=764&h=400&crop=1'
  },
}

const props2 = {
  from: 'url',
  file: {
    _id: 'Hno7zTFezKsH9S4oE',
    type: 'application/pdf',
    sourceUrl: 'https://www.pwc.com/us/en/consumer-finance/publications/assets/peer-to-peer-lending.pdf'
  },
}

const props3 = {
  from: 'url',
  file: {
    _id: 'Hno7zTFezKsH9S4oE',
    type: 'application/zip',
    sourceUrl: 'https://www.pwc.com/us/en/consumer-finance/publications/assets/peer-to-peer-lending.pdf'
  },
}

const props4 = {
  from: 'url',
  file: {
    _id: 'GvZZNDAzyzsvEGHyW',
    type: 'image/png'
  },
}

const props5 = {
  from: 'upload',
  file: {
    _id: 'GvZZNDAzyzsvEGHyW',
    type: 'image/png'
  }
}

const props6 = {
  from: 'upload',
  file: {
    _id: 'Hno7zTFezKsH9S4oE',
    type: 'application/zip',
    sourceUrl: 'https://www.pwc.com/us/en/consumer-finance/publications/assets/peer-to-peer-lending.pdf'
  }
}
storiesOf('Attachment Card', module)
  .add('from web', () => (
    <AttachmentCard
      style={{width: 300}}
      _id={'abc'}
      type={'article'}
      description={'this is a description'}
      name={'Github - Where software is built'}
      highlight={''}
      technologiesCount={9}
      organizationsCount={12}
      projectsCount={3}
      file={null}
      image={decideDisplayedImage(props)}
      editLink={'#'}
      entryLink={'#'}
      onClickViewEntry={() => console.log('onClickViewEntry')}
      {...props}
    />
  ))
  .add('from url (pdf)', () => (
    <AttachmentCard
      style={{width: 300}}
      _id={'abc'}
      type={'article'}
      description={'this is a description'}
      name={'Github - Where software is built'}
      highlight={''}
      technologiesCount={9}
      organizationsCount={12}
      projectsCount={3}
      image={decideDisplayedImage(props2)}
      editLink={'#'}
      entryLink={'#'}
      onClickViewEntry={() => console.log('onClickViewEntry')}
      {...props2}
    />
  ))
  .add('from url (zip)', () => (
    <AttachmentCard
      style={{width: 300}}
      _id={'abc'}
      type={'article'}
      description={'this is a description'}
      name={'Github - Where software is built'}
      highlight={''}
      technologiesCount={9}
      organizationsCount={12}
      projectsCount={3}
      image={decideDisplayedImage(props3)}
      editLink={'#'}
      entryLink={'#'}
      onClickViewEntry={() => console.log('onClickViewEntry')}
      {...props3}
    />
  ))
  .add('from url (image)', () => (
    <AttachmentCard
      style={{width: 300}}
      _id={'abc'}
      type={'article'}
      description={'this is a description'}
      name={'Github - Where software is built'}
      highlight={''}
      technologiesCount={9}
      organizationsCount={12}
      projectsCount={3}
      image={decideDisplayedImage(props4)}
      editLink={'#'}
      entryLink={'#'}
      onClickViewEntry={() => console.log('onClickViewEntry')}
      {...props4}
    />
  ))
  .add('from upload (image)', () => (
    <AttachmentCard
      style={{width: 300}}
      _id={'abc'}
      type={'article'}
      description={'this is a description'}
      name={'Github - Where software is built'}
      highlight={''}
      technologiesCount={9}
      organizationsCount={12}
      projectsCount={3}
      image={decideDisplayedImage(props5)}
      editLink={'#'}
      entryLink={'#'}
      onClickViewEntry={() => console.log('onClickViewEntry')}
      {...props5}
    />
  ))
  .add('from upload (zip)', () => (
    <AttachmentCard
      style={{width: 300}}
      _id={'abc'}
      type={'article'}
      description={'this is a description'}
      name={'Github - Where software is built'}
      highlight={''}
      technologiesCount={9}
      organizationsCount={12}
      projectsCount={3}
      image={decideDisplayedImage(props6)}
      editLink={'#'}
      entryLink={'#'}
      onClickViewEntry={() => console.log('onClickViewEntry')}
      {...props6}
    />
  ))
