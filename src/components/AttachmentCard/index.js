import React, { PropTypes } from 'react';
import Card from '../Card';
import CardHOC from '../CardHOC';
import { Organizations, Technologies, ViewEntry, Projects, Attachments } from '../../resources/icons';
import { decideDisplayedImage } from './lib';

class AttachmentCard extends Card {
  render() {
    const {
      _id,
      type,
      description,
      name,
      highlight,
      technologiesCount = 0,
      organizationsCount = 0,
      projectsCount = 0,
      from,
      web,
      file,

      editLink,
      entryLink,
      onClickViewEntry,
      onConfirmDelete,

      deleteAlertOpen,
      hideDeleteAlert,
      showDeleteAlert,
      isDeleted,
      ...props
    } = this.props;

    const displayedImage = decideDisplayedImage({
      from,
      web,
      file
    });

    return (
      <Card
        _id={_id}
        menuIcon={<Attachments />}
        image={displayedImage}
        menuItems={[
          {
            label: 'Edit Attachment',
            link: editLink
          }, {
            label: 'Delete Attachment',
            onClick: showDeleteAlert
          }
        ]}
        name={name}
        description={description}
        footerButtons={[
          {
            icon: <ViewEntry />,
            text: '',
            onClick: onClickViewEntry,
            tooltipText: 'View entry',
            tooltipIdentifier: 'view'
          },
          {
            icon: false,
            text: type,
            tooltipText: `Type is ${type}`,
            tooltipIdentifier: 'type'
          },
          {
            icon: <Technologies />,
            text: technologiesCount,
            tooltipText: `${technologiesCount} technologies on stash`,
            tooltipIdentifier: 'technologiesCount'
          },
          {
            icon: <Organizations />,
            text: organizationsCount,
            tooltipText: `${organizationsCount} organizations`,
            tooltipIdentifier: 'organizationsCount'
          },
          {
            icon: <Projects />,
            text: projectsCount,
            tooltipText: `${projectsCount} projects`,
            tooltipIdentifier: 'projectsCount'
          },
        ]}
        entryLink={entryLink}
        highlight={highlight}
        deleteTitle='Deleting Attachment'

        showDeleteAlert={showDeleteAlert}
        onCloseDeleteAlert={hideDeleteAlert}
        deleteAlertOpen={deleteAlertOpen}
        onConfirmDelete={onConfirmDelete}
        isDeleted={isDeleted}
        {...props}
        />
    );
  }
}

AttachmentCard.propTypes = {
  _id: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  highlight: PropTypes.string,
  technologiesCount: PropTypes.number,
  organizationsCount: PropTypes.number,
  projectsCount: PropTypes.number,
  from: PropTypes.string,
  web: PropTypes.object,
  file: PropTypes.object,
}
export default CardHOC(AttachmentCard);
