import React from 'react';
import { connect } from 'react-redux';
import classes from './index.module.css';
import * as actionCreators  from '../../store/actions/actions';

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
    counter: state.ctr.counter,
    list: state.lst.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delItem: index => dispatch(actionCreators.listRemove(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Visualisator);