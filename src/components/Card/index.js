import React, { PropTypes } from 'react';
import CardTooltip from '../CardTooltip';
import Highlight from 'react-highlighter';
import classNames from 'classnames';
import SweetAlert from 'sweetalert-react';
import shallowCompare from 'react-addons-shallow-compare';
import styles from './styles';

class CardBody extends React.Component {
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
      highlight,
      extraClass,
      isDeleted,
      onShouldClose,
      showDeleteAlert,
      deleteTitle,
      onConfirmDelete,
      hideMenuItems,
      _score
    } = this.props;
    return (

        <div className="ibox card-box"
          style={{border: '1px solid rgba(0, 0, 0, 0.1)', opacity: isDeleted ? 0.5 : 1}}>
          <div className={classNames('ibox-content', 'no-padding', 'card-label', extraClass)}>
            {
              !hideMenuItems &&
              <div className="btn-group card-tools">
                <button data-toggle="dropdown" className="btn btn-xs btn-white dropdown-toggle">
                  <i className={menuIcon}></i> <span className="caret"></span>
                </button>
                  <ul className="dropdown-menu">
                    {
                      menuItems.map(({label, link, onClick }, i) => {
                        return (
                          <li key={i}>
                            <a href={link ? link : '#'} onClick={(e) => {e.preventDefault(); onClick();}}>
                              {label}
                            </a>
                          </li>
                        );
                      })
                    }
                  </ul>
              </div>
            }
            <a href={entryLink}>
              <img className='img-responsive' src={image} />
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

              <div onClick={() => {console.log('oi')}}>


              <h5 className="card-name">
                <a href={entryLink}>
                  <Highlight search={highlight}>
                    {name}
                  </Highlight>
                </a>
              </h5>
              </div>
              <div className="card-description">
                <p>
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
          <SweetAlert
            onEscapeKey={onShouldClose}
            onOutsideClick={onShouldClose}
            onCancel={onShouldClose}
            show={showDeleteAlert}
            title={`${deleteTitle}`}
            text={`Are you sure you want to delete <b>${name}</b>? You will not be able to undo this action`}
            showCancelButton={true}
            confirmButtonColor={"#DD6B55"}
            confirmButtonText={"Delete"}
            onConfirm={() => onConfirmDelete(_id, name)}
            html={true} />
        </div>

    );
  }
}
export default CardBody;
