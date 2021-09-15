export const goPage = (history, location) => async dispatch => {
  await history.push(`/${location}`)
}