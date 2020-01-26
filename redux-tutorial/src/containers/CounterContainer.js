import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter_action';
import { bindActionCreators } from 'redux';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

/*
const mapStateToProps = state => ({
  number: state.counter.number,
});

const mapDispatchToProps = dispatch =>
  // ({
  //   increase: () => dispatch(increase()),
  //   decrease: () => dispatch(decrease()),
  // });
  bindActionCreators({ increase, decrease }, dispatch);
*/

export default connect(
  state => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  },
)(CounterContainer);
