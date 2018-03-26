// eslint-disable-next-line
import React, { Component } from 'react';

import { Form, FormControl, Button } from 'react-bootstrap';
import Clock from './Clock/Clock';
import StopWatch from './StopWatch/StopWatch';

import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    // Initial state of component
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: '',
      stoptime: '0',
      newstoptime: '',
    };
  }

  changeDeadline = () => {
    // set orignal deadline to new deadline within state
    this.setState({ deadline: this.state.newDeadline });
  }

  changeStopTime = () => {
    this.setState({ stoptime: this.state.newstoptime });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
          Countdown to { this.state.deadline }
        </div>
        { /* pass deadline from parent application state to
        the clock which can now recognize deadline as props */ }
          <Clock deadline={ this.state.deadline }/>
        <Form inline={ true }>
          <FormControl className="Deadline-input"
            placeholder='new date'
            // Set state object property 'newDeadline' to value entered into the input field
            onChange={ event => this.setState({ newDeadline: event.target.value }) }
          />
          { /* es6 anonymous function */ }
          <Button onClick={ () => this.changeDeadline() }>
            Submit
          </Button>
        </Form>


        <StopWatch />
      </div>
    );
  }
}
