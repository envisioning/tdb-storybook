import React, { PropTypes } from 'react'
import EntityLabel from '../EntityLabel';
import { Label, ListGroup, ListGroupItem } from 'react-bootstrap';
import moment from 'moment';
import NotificationBuilder from '../NotificationBuilder';
import recentUpdatesTextConfig from '../../config/recent_updates_texts';
import tokenizerComponentConfig from '../../config/tokenizer_component_config';
const styles = {
  container: {
    //display: 'flex',
    //flexDirection: 'column',
    //alignItems: 'center'
  },
  text: {
    width: '100%',
    //display: 'flex',
    //margin: '10px 0px 10px 5px',
    // width: '100%',
    //wordWrap: 'break-word'
  },
  date: {
    //float: 'right',
    // fontStyle: 'italic',
    // fontSize: '0.9em',
  },
  mainRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  detailsRow: {

  }
}

class RecentUpdatesItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showDetails: false
    }

    this.handleClickShowDetails = this.handleClickShowDetails.bind(this)
  }

  handleClickShowDetails() {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  getActionElement() {
    const { details, action } = this.props
    if (details) {
      return <a href='#' onClick={this.handleClickShowDetails}>{action}</a>;
    } else {
      return <span>{action}</span>;
    }
  }

  render () {
    const {
      type,
      method,
      userId,
      docId,
      date,
      values,
      style,
      details,
      ...props
    } = this.props

    const { showDetails } = this.state

    const mergedStyle = Object.assign({}, styles.container, style)
    return (
      <ListGroupItem style={mergedStyle} {...props}>
        <div style={styles.mainRow}>
          <span style={styles.text}>
            <NotificationBuilder
              dict={tokenizerComponentConfig}
              template={recentUpdatesTextConfig[method]}
              onToggleUpdate={this.handleClickShowDetails}
              values={values}
              />
          </span>
          <Label style={styles.date} bsStyle="success">
            {moment(date).fromNow()}
          </Label>
        </div>
        {
          (details && showDetails) &&
          <div style={styles.detailsRow}>
            <ListGroup>
              {
                details.map((detail, i) => (
                  <ListGroupItem
                    key={i}
                    dangerouslySetInnerHTML={{__html: detail}} />
                ))
              }
            </ListGroup>
          </div>
        }
      </ListGroupItem>
    )
  }
}



RecentUpdatesItem.PropTypes = {
  type: PropTypes.string.isRequired,
  docName: PropTypes.string.isRequired,
  labelColor: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  docLink: PropTypes.string,
  userLink: PropTypes.string,
  action: PropTypes.string.isRequired,
  details: PropTypes.array,
  date: PropTypes.isRequired,
  showDetails: PropTypes.bool
}

export default RecentUpdatesItem

{/*<template name="recentUpdatesItem">
  {{#if Template.subscriptionsReady}}
    <li class="list-group-item animated fadeInUp">
      {{#if ($eq collection 'technologies')}}
        {{> technologyLabel status=tech.status name=docName hasIcon=hasIcon _id=docId}}
      {{else}}
        <a href="{{pathFor routeName id=getId}}" class="label label-default recent-updates-item">
          {{#if hasIcon}}<i class="icon {{icon}}"></i> {{/if}}
          {{docName}}
        </a>
      {{/if}}
      <p>
        {{getText}}
        <!--was {{description}} by-->
        <a href="{{pathFor 'users.entry' id=userId }}">
          {{userIdentification}}
        </a>
      </p>
      <span class="label label-primary label-time">
        {{moFromNow createdAt}}
      </span>
    </li>
  {{/if}}
</template>*/}
