import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  list: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COUNTER_ADD:
      return {
        ...state,
        counter: state.counter + action.payload
      }
    case actionTypes.COUNTER_SUBTRACT:
      return {
        ...state, 
        counter: state.counter - action.payload
      }
    case actionTypes.LIST_ADD:
      return {
        ...state, 
        list: state.list.concat(action.payload)
      }
    case actionTypes.LIST_REMOVE:
      return {
        ...state, 
        list: state.list.filter(el => el !== state.list[action.payload])
      }
    default:
      return state
  }
}

export default reducer;