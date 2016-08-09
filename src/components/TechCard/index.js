import React, { PropTypes } from 'react';
import { Icons, Colors } from '../../resources';
import { getCardUrl, getCloudinaryPath } from '../../utils/cloudinary';
import CardBody from '../CardBody';
import CardHOC from '../CardHOC';

const remove = () => {};

class TechCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleConfirmDelete = this.handleConfirmDelete.bind(this);
  }
  handleConfirmDelete(_id, name) {
    remove.call({
      _id
    }, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        toastr.success(`<b>${name}</b> deleted!`, 'Success');
        this.props.makeDeleted();
      }
    });

    this.props.hideDeleteAlert();
  }

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
      handleClickDelete,
      showDeleteAlert,
      hideDeleteAlert,
      isDeleted,
      ...props
    } = this.props;
    const extraClass = `panel-${Colors.tech.status[status || 'default']}`;
    return (
      <CardBody
        _id={_id}
        menuIcon={Icons.collections.technologies}
        image={getCardUrl(getCloudinaryPath(image))}
        menuItems={[
          {
            label: 'Edit Technology',
            link: '#'
          }, {
            label: 'Delete Technology',
            onClick: handleClickDelete
          }
        ]}
        hideMenuItems={hideMenuItems}
        name={name}
        subname={techId}
        description={shortDescription}
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
            text: status,
            tooltipText: `Status is ${status}`,
            tooltipIdentifier: 'status'
          },
          {
            icon: Icons.collections.attachments,
            text: attachmentsCount,
            tooltipText: `${attachmentsCount} attachments`,
            tooltipIdentifier: 'attachmentsCount'
          },
          {
            icon: Icons.collections.projects,
            text: projectsCount,
            tooltipText: `${projectsCount} projects`,
            tooltipIdentifier: 'projectsCount'
          },
          {
            icon: Icons.collections.organizations,
            text: organizationsCount,
            tooltipText: `${organizationsCount} organizations`,
            tooltipIdentifier: 'organizationsCount'
          },
        ]}
        entryLink={'#'}
        highlight={highlight}
        extraClass={extraClass}
        showDeleteAlert={showDeleteAlert}
        deleteTitle='Deleting Technology'
        onShouldClose={hideDeleteAlert}
        onConfirmDelete={this.handleConfirmDelete}
        isDeleted={isDeleted}
        {...props}
        />
    );
  }
}
export default CardHOC(TechCard);
