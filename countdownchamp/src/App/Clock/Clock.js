import React, { Component } from 'react'

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
        }
        console.log('this.props', this.props)
    }

    render() {
        return (
            <div>
                <div>
                    <div className="Clock-days" >{this.state.days} days</div>
                    <div className="Clock-hours" >{this.state.hours} hours</div>
                    <div className="Clock-minutes" >{this.state.minutes} miuntes</div>
                    <div className="Clock-seconds" >{this.state.seconds} seconds</div>
                </div>
            </div>
        )
    }
}
