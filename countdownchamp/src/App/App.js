// eslint-disable-next-line
import React, { Component } from 'react';

import Clock from './Clock/Clock';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    // Initial state of component
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: '',
    };
  }

  changeDeadline = () => {
    // set orignal deadline to new deadline within state
    this.setState({ deadline: this.state.newDeadline });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title ">
          Countdown to { this.state.deadline }
        </div>
        { /* pass deadline from parent application state to
        the clock which can now recognize deadline as props */ }
          <Clock deadline={ this.state.deadline }/>
        <div>
          <input
            placeholder='new date'
            // Set state object property 'newDeadline' to value entered into the input field
            onChange={ event => this.setState({ newDeadline: event.target.value }) }
          />
          { /* es6 anonymous function */ }
          <button onClick={ () => this.changeDeadline() }>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
