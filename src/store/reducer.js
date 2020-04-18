import * as actionTypes from './actions';

const initialState = {
  number: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        number: state.number + action.payload
      }
    case actionTypes.DELETE:
      return {
        ...state, 
        number: state.number - action.payload
      }
    default:
      return state
  }
}

export default reducer;