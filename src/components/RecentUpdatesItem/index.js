import React, { PropTypes } from 'react'
import EntityLabel from '../EntityLabel';
import { Label } from 'react-bootstrap';
import moment from 'moment';

const RecentUpdatesItem = ({
  docType,
  docName,
  docStatus,
  docLink,
  labelColor,
  userName,
  userLink,
  action,
  details,
  showDetails,
  date
}) => {
  return (
    <li class="list-group-item">
      <p>
        <EntityLabel
          type={docType}
          status={docStatus}
          text={docName} />
        was {action} by {userName}
      </p>
      <Label>
        {moment(date).fromNow()}
      </Label>
    </li>
  )
}

RecentUpdatesItem.PropTypes = {
  docType: PropTypes.string.isRequired,
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
