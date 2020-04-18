import React from 'react';
import { connect } from 'react-redux';

const Visualisator = ({number}) => (
  <h1>Number: {number}</h1>
)

const mapStateToProps = state => {
  return {
    number: state.number
  }
}

export default connect(mapStateToProps)(Visualisator);