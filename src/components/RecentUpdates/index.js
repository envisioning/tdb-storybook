import React, { PropTypes } from 'react'
import { Panel, PanelTitle, PanelHeader, PanelBody } from '../Panel';
import { RecentUpdates as RecentUpdatesIcon } from '../../resources/icons';
import RecentUpdatesItem from '../RecentUpdatesItem'
import EntityLabel from '../EntityLabel';
import Infinite from 'react-infinite';


const RecentUpdates = ({
  recentUpdates = []
}) => {
  return (
    <Panel>
      <PanelHeader
        title={
          <PanelTitle
            iconElementLeft={<RecentUpdatesIcon />}
            title={"Recent Updates"} />
        }
      />
      <PanelBody>
        <Infinite
          containerHeight={400}
          elementHeight={60}
          infiniteLoadBeginEdgeOffset={300}
          loadingSpinnerDelegate={<div>Loading...</div>}
          onInfiniteLoad={() => console.log('infinite')}>
          {
          recentUpdates.map((recentUpdate, i) => (
            <RecentUpdatesItem
              style={{minHeight: 60}}
              key={i}
              {...recentUpdate}
            />
          ))
          }
        </Infinite>
      </PanelBody>
    </Panel>
  )
}

RecentUpdates.propTypes = {
  recentUpdates: PropTypes.array.isRequired
}
export default RecentUpdates



{/*<template name="recentUpdates">
  {{#panelContainer class='float-e-margins recent-updates' }}
    {{#panelTitle}}
      <h1>
        <i class="{{Icons.misc.updates}}"></i>
        Latest Updates
      </h1>
    {{/panelTitle}}
    {{#panelContent class='no-padding'}}
      {{#if isReady}}
        {{#if totalCount}}
          {{> scrollbarList logs=logs hasIcon=hasIcon getColor=getColor}}
        {{else}}
          <div class="empty-message">
            <i class='fa fa-frown-o'></i>
            <h3>
              No recent updates
            </h3>
          </div>
        {{/if}}
      {{else}}
        <div style="padding: 20px 0px">
            {{> spinnerCircle}}
        </div>
      {{/if}}
    {{/panelContent}}
    {{#panelFooter}}
      <span class="pull-right">
        <a class="text-primary" id='view-more'>
          View more... ({{displayCount}} / {{totalCount}})
        </a>
      </span>
      <a class='text-primary' id='view-less'>
        View less
      </a>
    {{/panelFooter}}
  {{/panelContainer}}
</template>
<template name="scrollbarList">
  <!--<div class="scrollbar-recent-updates">-->
  {{#perfectScrollbar}}
    <ul class="list-group">
      {{#each logs}}
        {{> recentUpdatesItem
          hasIcon=../hasIcon
          getColor=../getColor
          collection=collection
          operation=operation
          docName=docName
          docId=docId
          userId=userId
          userIdentification=user.identification
          evId=evId
          createdAt=createdAt
          createdBy=createdBy
        }}
      {{/each}}
    </ul>
    {{/perfectScrollbar}}
    <!--</div>-->
</template>*/}
