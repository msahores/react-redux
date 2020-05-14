import * as actionTypes from './actionsTypes';

export const counterAdd = number => {
  return {
    type: actionTypes.COUNTER_ADD, 
    payload: number
  }
}

export const counterSubtract = number => {
  return {
    type: actionTypes.COUNTER_SUBTRACT, 
    payload: number
  }
}