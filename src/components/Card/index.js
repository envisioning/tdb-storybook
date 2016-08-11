import React, { PropTypes } from 'react';
import CardTooltip from '../CardTooltip';
import Highlight from 'react-highlighter';
import classNames from 'classnames';
import SweetAlert from 'sweetalert-react';
import shallowCompare from 'react-addons-shallow-compare';
import styles from './styles';
import { DropdownButton, MenuItem} from 'react-bootstrap';
import SafeImage from '../SafeImage'

const IMAGE_PLACEHOLDER = 'https://placehold.it/300x200';

class Card extends React.Component {
  render() {
    const {
      _id,
      menuIcon,
      image,
      menuItems,
      name,
      subname,
      description,
      footerButtons,
      entryLink,
      highlight = '',
      extraClass,
      isDeleted,
      onCloseDeleteAlert,
      deleteAlertOpen,
      deleteTitle,
      onConfirmDelete,
      hideMenuItems,
      _score,
      style,
      showFullDescription = false,
      ...props
    } = this.props;

    return (
      <div className="ibox card-box"
        style={{...styles.container, opacity: isDeleted ? 0.5 : 1, ...style}}>
        <div className={classNames('ibox-content', 'no-padding', 'card-label', extraClass)}>
          {
            !hideMenuItems &&
            <div className="btn-group card-tools">
              <DropdownButton bsSize="xsmall" title={menuIcon} id="card-tools" style={styles.buttonDropdown}>
                {
                  menuItems.map(({label, link, onClick }, i) => {
                    return (
                      <MenuItem eventKey={i} key={i} onClick={onClick}>
                        {label}
                      </MenuItem>
                    );
                  })
                }

              </DropdownButton>
            </div>
          }
          <a href={entryLink}>
            <SafeImage className='img-responsive' src={image ? image : IMAGE_PLACEHOLDER} />
          </a>
          <div className="card-body">
            {
              subname ?
              <p className="card-id">
                <Highlight search={highlight}>
                  {subname}
                </Highlight>
              </p>
              : null
            }

            <h5 className="card-name">
              <a href={entryLink}>
                <Highlight search={highlight}>
                  {name}
                </Highlight>
              </a>
            </h5>

            <div className="card-description">
              <p style={showFullDescription ? {WebkitLineClamp: 'initial'} : null}>
                <Highlight search={highlight}>
                  {description}
                </Highlight>
              </p>
              <p style={{color: '#d3d3d3', fontSize: 10}}>
                {_score}
              </p>
            </div>

            <div className="btn-group card-footer">
              {
                footerButtons.map(({icon, text, onClick, tooltipText, tooltipIdentifier}, i) => {
                  if (!icon && !text) {
                    return null;
                  }
                  return (
                    <CardTooltip
                      key={i}
                      id={`${_id}_${i}`}
                      icon={icon}
                      onClick={onClick}
                      tooltipText={tooltipText}
                      text={text} />
                  );
                })
              }
            </div>
          </div>
        </div>
        {/*<SweetAlert
          onEscapeKey={onCloseDeleteAlert}
          onOutsideClick={onCloseDeleteAlert}
          onCancel={onCloseDeleteAlert}
          show={deleteAlertOpen}
          title={`${deleteTitle}`}
          text={`Are you sure you want to delete <b>${name}</b>? You will not be able to undo this action`}
          showCancelButton={true}
          confirmButtonColor={"#DD6B55"}
          confirmButtonText={"Delete"}
          onConfirm={() => { onConfirmDelete(_id, name) }}
          html={true} />*/}
      </div>

    );
  }
}

Card.propTypes= {
  _id: PropTypes.string,
  menuIcon: PropTypes.element,
  image: PropTypes.string,
  menuItems: PropTypes.array,
  name: PropTypes.string,
  subname: PropTypes.string,
  description: PropTypes.string,
  footerButtons: PropTypes.array,
  entryLink: PropTypes.string,
  highlight: PropTypes.string,
  extraClass: PropTypes.string,
  isDeleted: PropTypes.bool,
  onCloseDeleteAlert: PropTypes.func,
  deleteAlertOpen: PropTypes.bool,
  deleteTitle: PropTypes.string,
  onConfirmDelete: PropTypes.func,
  hideMenuItems: PropTypes.bool,
  _score: PropTypes.number
}
export default Card;
