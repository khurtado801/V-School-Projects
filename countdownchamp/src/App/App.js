import React, { Component } from 'react';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    // Initial state of component
    this.state = {
      deadline: 'December 25, 2017'
    };
  }

changeDeadline = () => {
  this.setState({ deadline: 'November 25, 2017' });
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
          <input placeholder='new date' />
          <button>Submit</button>
        </div>
      </div>
  );
}
}
