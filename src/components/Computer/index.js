import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/counter';

const Computer = ({add, del}) => (
  <>
    <h3 onClick={()=>add(5)}>ADD</h3>
    <h3 onClick={()=>del(3)}>DELETE</h3>
  </>
)

const mapDispatchToProps = dispatch => {
  return {
    add: number => dispatch(actionTypes.counterAdd(number)),
    del: number => dispatch(actionTypes.counterSubtract(number)),
  }
}

export default connect(null, mapDispatchToProps)(Computer);