// eslint-disable-next-line
import React, { Component } from 'react';

import './Clock.css';

export default class Clock extends Component {
  constructor(props) { // For object oriented inherited programming style of ES6 JavaScript
    super(props);
    // Declare initial state
    this.state = {
      day: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    // setInterval uses anonymous arrow function
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  leading0(num) {
    return num < 10 ? '0' + num: num;
  }

  getTimeUntil(deadline) {
    /* The 'new Date' grabs current time and sets that time as its time.
        so the subtraction calculation is subtracting the current time
        between the deadline and the current date */
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));
    // Update state
    this.setState({days, hours, minutes, seconds});
  }

  render() {
    return (
      <div>
        <div className="Clock-days">{this.leading0(this.state.days)} days</div>
        <div className="Clock-hours">{this.leading0(this.state.hours)} hours</div>
        <div className="Clock-minutes">{this.leading0(this.state.minutes)} minutes</div>
        <div className="Clock-seconds">{this.leading0(this.state.seconds)} seconds</div>
      </div>
    );
  }
}

// stopped at 5:10
// https://www.udemy.com/react-js-and-redux-mastering-web-apps/learn/v4/t/lecture/6378964?start=0
