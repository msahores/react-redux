import React from 'react';
import { connect } from 'react-redux';
import classes from './index.module.css';
import * as actionTypes from '../../store/actions';

const Visualisator = ({ counter, list, delItem }) => (
  <>
    <h1>Counter: { counter }</h1>
    <h1>List: { list.map((el, index) => (
      <span 
        key={index} 
        className={classes.test}
        onClick={evt => delItem(index)}
      >
        {el}
      </span>)
    ) }
    </h1>
  </>
)

const mapStateToProps = state => {
  return {
    counter: state.counter,
    list: state.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delItem: index => dispatch({type: actionTypes.LIST_REMOVE, payload: index})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Visualisator);