import React, { useRef } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

const AddItemsToList = ({ addItem }) => {
  const inputRef = useRef();
  return (
  <>
    <input type='text' name='task' ref={inputRef}/>
    <button type='button' onClick={() => addItem(inputRef.current.value)}>Add</button>
  </>
)}

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(actionCreators.listAdd(item))
  }
}

export default connect(null, mapDispatchToProps)(AddItemsToList);