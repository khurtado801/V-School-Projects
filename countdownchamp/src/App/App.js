import React, { Component } from 'react';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    // Initial state of component
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: '',
    };
  }

changeDeadline = () => {
  this.setState({ deadline: this.state.newDeadline }); // set orignal deadline to new deadline within state
}

render() {
  return (
      <div className="App">
        <div className="App-title ">
          Countdown to { this.state.deadline }
        </div>
        <div>
          <div className="Clock-days" >14 Days</div>
          <div className="Clock-hours" >30 Hours</div>
          <div className="Clock-minutes" >15 Miuntes</div>
          <div className="Clock-seconds" >20 Seconds</div>
        </div>
        <div>
          <input
            placeholder='new date'
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
