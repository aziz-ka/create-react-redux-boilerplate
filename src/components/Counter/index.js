import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  increaseCounter,
  increaseCounterDelayed,
  resetCounter
} from './actions';
import { getCounter } from './selectors';
import './styles.css';


export class Counter extends Component {
  render = () => {
    const {
      counter=0,
      increaseCounter,
      increaseCounterDelayed,
      resetCounter
    } = this.props;

    return (
      <section className='counter-section'>
        <p>{counter}</p>
        <button onClick={increaseCounter}>+1</button>
        <button onClick={increaseCounterDelayed}>+1 delayed</button>
        <button onClick={resetCounter}>Reset</button>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  counter: getCounter(state)
});

const mapDispatchToProps = {
  increaseCounter,
  increaseCounterDelayed,
  resetCounter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
