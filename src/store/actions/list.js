import * as actionTypes from './actionsTypes';

export const saveResult = item => {
  return {
    type: actionTypes.LIST_ADD,
    payload: item
  }
}

export const listAdd = item => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(item))
    }, 1000)
  }
}

export const listRemove = index => {
  return {
    type: actionTypes.LIST_REMOVE,
    payload: index
  }
}