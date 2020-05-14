export const COUNTER_ADD = 'COUNTER_ADD';
export const COUNTER_SUBTRACT = 'COUNTER_SUBTRACT';
export const LIST_ADD = 'LIST_ADD';
export const LIST_REMOVE = 'LIST_REMOVE';

export const counterAdd = number => {
  return {
    type: COUNTER_ADD, 
    payload: number
  }
}

export const counterSubtract = number => {
  return {
    type: COUNTER_SUBTRACT, 
    payload: number
  }
}

export const saveResult = item => {
  return {
    type: LIST_ADD,
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
    type: LIST_REMOVE,
    payload: index
  }
}