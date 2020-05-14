import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COUNTER_ADD:
      return updateObject(state, {counter: state.counter + action.payload})
    case actionTypes.COUNTER_SUBTRACT:
      return updateObject(state, {counter: state.counter - action.payload})
    default:
      return state
  }
}

export default reducer;