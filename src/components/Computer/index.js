import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

const Computer = ({add, del}) => (
  <>
    <h3 onClick={()=>add(5)}>ADD</h3>
    <h3 onClick={()=>del(3)}>DELETE</h3>
  </>
)

const mapDispatchToProps = dispatch => {
  return {
    add: number => dispatch(actionCreators.counterAdd(number)),
    del: number => dispatch(actionCreators.counterSubtract(number)),
  }
}

export default connect(null, mapDispatchToProps)(Computer);