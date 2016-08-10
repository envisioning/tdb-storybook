import React, { PropTypes } from 'react';
import { getCloudinaryPath, getCardUrl} from '../../utils/cloudinary_url'
import Card from '../Card';
import CardHOC from '../CardHOC';
import { Organizations, Technologies, ViewEntry, Projects, Attachments } from '../../resources/icons';

class OrganizationCard extends Card {
  render() {
    const {
      _id,
      type,
      logo,
      description,
      name,
      highlight,
      technologiesCount = 0,
      projectsCount = 0,
      attachmentsCount = 0,
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
        menuIcon={<Organizations />}
        image={logo}
        menuItems={[
          {
            label: 'Edit Organization',
            link: editLink
          }, {
            label: 'Delete Organization',
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
            icon: <Projects />,
            text: projectsCount,
            tooltipText: `${projectsCount} projects`,
            tooltipIdentifier: 'projectsCount'
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

        deleteTitle='Deleting Organization'
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
OrganizationCard.propTypes = {
  _id: PropTypes.string,
  type: PropTypes.string,
  logo: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  highlight: PropTypes.string,
  technologiesCount: PropTypes.number,
  projectsCount: PropTypes.number,
  attachmentsCount: PropTypes.number,
  editLink: PropTypes.string,
  entryLink: PropTypes.string,
  onClickViewEntry: PropTypes.func,
  deleteAlertOpen: PropTypes.bool,
  hideDeleteAlert: PropTypes.func,
  showDeleteAlert: PropTypes.func,
  isDeleted: PropTypes.bool,
}
export default CardHOC(OrganizationCard);
