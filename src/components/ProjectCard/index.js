import React, { PropTypes } from 'react';
import { getCardUrl, getCloudinaryPath } from '../../utils/cloudinary_url';
import Card from '../Card';
import CardHOC from '../CardHOC';
import { Organizations, Technologies, ViewEntry, Projects, Attachments, Collections } from '../../resources/icons';

class ProjectCard extends Card {
  render() {
    const {
      _id,
      status,
      description,
      evId,
      name,
      image,
      collectionsCount = 0,
      technologiesStashCount = 0,
      attachmentsCount = 0,
      highlight,
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
    return (
      <Card
        _id={_id}
        menuIcon={<Projects />}
        image={image}
        menuItems={[
          {
            label: 'Edit Project',
            link: editLink
          }, {
            label: 'Delete Project',
            onClick: showDeleteAlert
          }
        ]}
        name={name}
        subname={evId}
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
            text: status,
            tooltipText: `Status is ${status}`,
            tooltipIdentifier: 'status'
          },
          {
            icon: <Technologies />,
            text: technologiesStashCount,
            tooltipText: `${technologiesStashCount} technologies on stash`,
            tooltipIdentifier: 'technologiesStashCount'
          },
          {
            icon: <Collections />,
            text: collectionsCount,
            tooltipText: `${collectionsCount} collections`,
            tooltipIdentifier: 'collectionsCount'
          },
          {
            icon: <Attachments />,
            text: attachmentsCount,
            tooltipText: `${attachmentsCount} attachments`,
            tooltipIdentifier: 'attachmentsCount'
          },
        ]}
        entryLink={entryLink}
        highlight={highlight}
        deleteTitle='Deleting Project'

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

ProjectCard.propTypes = {
  _id: PropTypes.string,
  status: PropTypes.string,
  description: PropTypes.string,
  evId: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  collectionsCount: PropTypes.number,
  technologiesStashCount: PropTypes.number,
  attachmentsCount: PropTypes.number,
  highlight: PropTypes.string,

  editLink: PropTypes.string,
  entryLink: PropTypes.string,
  onClickViewEntry: PropTypes.func,
  onConfirmDelete: PropTypes.func,

  deleteAlertOpen: PropTypes.bool,
  hideDeleteAlert: PropTypes.func,
  showDeleteAlert: PropTypes.func,
  isDeleted: PropTypes.bool,
}
export default CardHOC(ProjectCard);
