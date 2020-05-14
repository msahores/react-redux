import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
  list: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LIST_ADD:
      return updateObject(state, {list: state.list.concat(action.payload)})
    case actionTypes.LIST_REMOVE:
      return updateObject(state, {list: state.list.filter((el, index) => index !== action.payload)})
    default:
      return state
  }
}

export default reducer;