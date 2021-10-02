export const formatDate = (date) => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear()

  if (month.length < 2)
    month = '0' + month
  if (day.length < 2)
    day = '0' + day

  return [year, month, day].join('-')
}

export const formatDueDate = (date) => {
  var today = new Date()

  if (today > new Date(date)) {
    return 'Expired'
  }

  return formatDate(date)
}