export const initialState = {
  value: 0,
  action: null,
}

export const set_data = (state = initialState, action) => {
  console.log('set data', state);
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        ...action.payload
      }
    default:
      return {...state}
  }
}
