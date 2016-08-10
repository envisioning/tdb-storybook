export const getTechColor = (status) => {
  switch (status) {
    case 'draft': return 'danger'
    case 'review': return 'warning'
    case 'published': return 'success'
    default: return 'primary'
  }
}

export const getEntityColor = (type, status) => {
  switch (type) {
    case 'technologies':
      return getTechColor(status)
    default:
      return 'default'
  }
}
