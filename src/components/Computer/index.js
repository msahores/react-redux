import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

const Computer = ({add, del}) => (
  <>
    <h3 onClick={()=>add(5)}>ADD</h3>
    <h3 onClick={()=>del(3)}>DELETE</h3>
  </>
)

const mapDispatchToProps = dispatch => {
  return {
    add: number => dispatch({type: actionTypes.COUNTER_ADD, payload: number}),
    del: number => dispatch({type: actionTypes.COUNTER_SUBTRACT, payload: number}),
  }
}

export default connect(null, mapDispatchToProps)(Computer);