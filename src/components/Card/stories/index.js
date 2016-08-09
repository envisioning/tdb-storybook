import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Icons, Colors } from '../../../resources';
import Card from '../';

storiesOf('Card', module)
  .add('tech card', () => (
    <Card
      _id={'abcedfr'}
      menuIcon={Icons.collections.technologies}
      image={'http://www.placehold.it/600x400'}
      menuItems={[
        {
          label: 'Edit Technology',
          link: '#'
        }, {
          label: 'Delete Technology',
          onClick: () => {}
        }
      ]}
      hideMenuItems={false}
      name={'Drone Delivery'}
      subname={'0001'}
      description={'this is a short description'}
      footerButtons={[
        {
          icon: 'fa fa-eye',
          text: '',
          onClick: () => {},
          tooltipText: 'View entry',
          tooltipIdentifier: 'view'
        },
        {
          icon: false,
          text: 'Draft',
          tooltipText: 'Status is Draft',
          tooltipIdentifier: 'status'
        },
        {
          icon: Icons.collections.attachments,
          text: 2,
          tooltipText: `${2} attachments`,
          tooltipIdentifier: 'attachmentsCount'
        },
        {
          icon: Icons.collections.projects,
          text: 3,
          tooltipText: `${3} projects`,
          tooltipIdentifier: 'projectsCount'
        },
        {
          icon: Icons.collections.organizations,
          text: 4,
          tooltipText: `${4} organizations`,
          tooltipIdentifier: 'organizationsCount'
        },
      ]}
      entryLink={'#'}
      highlight={'Dro'}
      extraClass={''}
      showDeleteAlert={false}
      deleteTitle='Deleting Technology'
      onShouldClose={() => {}}
      onConfirmDelete={() => {}}
      isDeleted={false}
      />
  ))
