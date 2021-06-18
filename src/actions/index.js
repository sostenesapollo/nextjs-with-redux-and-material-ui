export const set_data = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SET_DATA',
      payload
    })
  }
}