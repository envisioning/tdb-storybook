import React, { PropTypes } from 'react';
import Card from '../Card';
import CardHOC from '../CardHOC';
import { Organizations, Technologies, ViewEntry, Projects, Attachments } from '../../resources/icons';

class TechCard extends React.Component {
  render() {
    const {
      _id,
      status,
      shortDescription,
      description,
      techId,
      name,
      attachmentsCount = 0,
      projectsCount = 0,
      organizationsCount = 0,
      image,
      highlight,
      hideMenuItems = false,
      onConfirmDelete,

      deleteAlertOpen,
      hideDeleteAlert,
      showDeleteAlert,
      isDeleted,
      ...props
    } = this.props;

    let extraClass
    switch (status) {
      case 'draft':
        extraClass = 'panel-danger'
        break;
      case 'review':
        extraClass = 'panel-warning'
        break;
      case 'published':
        extraClass = 'panel-success'
        break;
      default:
        extraClass = 'panel-primary'
    }

    return (
      <Card
        _id={_id}
        menuIcon={<Technologies />}
        image={image}
        menuItems={[
          {
            label: 'Edit Technology',
            link: '#'
          }, {
            label: 'Delete Technology',
            onClick: showDeleteAlert
          }
        ]}
        hideMenuItems={hideMenuItems}
        name={name}
        subname={techId}
        description={shortDescription}
        footerButtons={[
          {
            icon: <ViewEntry />,
            text: '',
            onClick: () => {},
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
            icon: <Attachments />,
            text: attachmentsCount,
            tooltipText: `${attachmentsCount} attachments`,
            tooltipIdentifier: 'attachmentsCount'
          },
          {
            icon: <Projects />,
            text: projectsCount,
            tooltipText: `${projectsCount} projects`,
            tooltipIdentifier: 'projectsCount'
          },
          {
            icon: <Organizations />,
            text: organizationsCount,
            tooltipText: `${organizationsCount} organizations`,
            tooltipIdentifier: 'organizationsCount'
          },
        ]}
        entryLink={'#'}
        highlight={highlight}
        extraClass={extraClass}
        deleteAlertOpen={deleteAlertOpen}
        deleteTitle='Deleting Technology'
        onCloseDeleteAlert={hideDeleteAlert}
        onConfirmDelete={onConfirmDelete}
        isDeleted={isDeleted}
        {...props}
        />
    );
  }
}

TechCard.propTypes = {
  _id: PropTypes.string,
  status: PropTypes.string,
  shortDescription: PropTypes.string,
  description: PropTypes.string,
  techId: PropTypes.string,
  name: PropTypes.string,
  attachmentsCount: PropTypes.number,
  projectsCount: PropTypes.number,
  organizationsCount: PropTypes.number,
  image: PropTypes.string,
  highlight: PropTypes.string,
  hideMenuItems: PropTypes.bool,
  onConfirmDelete: PropTypes.func,
  deleteAlertOpen: PropTypes.bool,
  hideDeleteAlert: PropTypes.func,
  showDeleteAlert: PropTypes.func,
  isDeleted: PropTypes.bool
}
export default CardHOC(TechCard);
