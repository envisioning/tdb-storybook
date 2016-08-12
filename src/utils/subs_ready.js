export const isSubsReady = (componentId, subName, state) => {
  const handlerId = state.client.subscriptions.getIn([componentId, subName], false);
  if (!handlerId) return true;
  return state.client.handlers.getIn([handlerId, 'isReady'], true);
}
