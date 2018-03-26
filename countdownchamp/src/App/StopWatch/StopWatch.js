import React, { Component } from 'react'

import Controls from './Controls';
import Laps from './Laps';
import './StopWatch.css';

class Stopwatch extends Component {
    constructor() {

        super();

        this.state = {
            is_running: false,        // Used to flag if watch is running or not
            main_string: '00:00.00',  // Main stopwatch counter string
            sub_string: '00:00.00',   // Lap stop watch counter string
            laps: [],                 // Stores every lap data
            slowest_lap: {},          // Stores the data of the slowest lap
            fastest_lap: {}           // Stores the data of the fastest lap
        };

    }

    watch = null;

    /*
     * There are two counters in the application
     * 1. Main counter: It counts the total
     * 2. Sub counter: It counts only the current lap
     */
    main_counter = {};
    sub_counter = {};

    // Number of laps
    laps_count = 0;



    /*
     * Used to initialize the main stopwatch and "individual lap" stopwatch
     * - It can initialize the main or sub counters based on the input argument "item"
     * - If nothing is passed then main stopwatch is initialized
     */
    init(item) {
        item = item || 'main';
        this[item + '_counter'] = {
            minutes: 0,
            seconds: 0,
            milli_seconds: 0,
            ticks: 0
        };
    };



    /*
	   * Start Counting
	   */
    start() {

        // Initialize the first lap
        if (this.laps_count === 0) {
            this.lap();
        }

        // Clear the previous watch if running
        this.stop();

        // Mark the watch as running
        this.setState({
          is_running: true
        });

        // Call back function gets called for every 10 milli seconds
        this.watch = setInterval(() => {

            // We will go through both objects
            // 1. Main stopwatch object
            // 2. Sub stopwatch object (current lap)

            [this.main_counter, this.sub_counter].forEach((item, index) => {

                // Count the number of times the current object is being called
                // This is used to know the lowest and fastest lap
                item.ticks++;

                // If milli seconds are 99, it means it's a second
                if (item.milli_seconds === 99) {

                    // Reset the millli second counter
                    item.milli_seconds = 0;

                    // If Seconds counted are 59, it means a minute
                    if (item.seconds === 59) {
                        // Reset the seconds counter
                        item.seconds = 0;
                        // Increment the minute
                        item.minutes++;
                    } else {
                        item.seconds++;
                    }
                } else {
                    item.milli_seconds++;
                }
            });
            // Update stopwatch strings shown in UI
            this.updateCounters();
        }, 10);
    };


    /*
	   * Stop Counting
	   */
    stop() {

        this.setState({
          is_running: false // Mark stopwatch as not running
        });

        // If watch reference is present, Clear it
        if (this.watch) {
            clearInterval(this.watch);
        }
    };


    /*
	   * New Lap
	   */
    lap() {

        // "this.sub_counter" contains current lap data
        // "this.state.slowest_lap" object contains data of the slowest lap
        // "this.state.slowest_lap" object contains data of the fastest lap

        // If current lap is second lap or "current lap" is slower than already noted slowest lap
        if (this.laps_count === 1 || this.sub_counter.ticks > this.state.slowest_lap.ticks) {
            // Set this lap's data as slowest
            this.setState({
                slowest_lap: {
                    number: this.laps_count,
                    ticks: this.sub_counter.ticks
                }
            });
        }

        // If current lap is second lap or current lap is faster than already noted slowet lap
        if (this.laps_count === 1 || this.sub_counter.ticks < this.state.fastest_lap.ticks) {
            // Save current lap's data as fastest
            this.setState({
                fastest_lap: {
                    number: this.laps_count,
                    ticks: this.sub_counter.ticks
                }
            });
        }

        // Increment the laps count
        this.laps_count++;

        // Create the new lap object
        var new_lap = {
            number: this.laps_count,
            string: '00:00.00'
        };

        // Add it to the array and also
        // add all PREVIOS LAPS DATA (...this.state.laps) after the new lap
        var new_laps = [
            new_lap, ...this.state.laps
        ];

        // Add total lap time as  "string" to the previous lap as we are moving on to the next lap
        if (this.laps_count > 1) {
            new_laps[1] = {
                ...new_laps[1],
                string: this.state.sub_string
            }
        }

        // Reset the sub counter -> "this.sub_counter" object
        this.init('sub');

        // Add laps data to the state
        this.setState({
          laps: new_laps
        });

    };


    /*
     * Reset the stopwatch, Application will goback to "initial state"
     */
    reset() {
        // Re-initialize the data -> "this.main_counter" object
        this.init();

        // Reset the sub counter -> "this.sub_counter" object
        this.init('sub');

        // Update stopwatch strings shown in UI
        this.updateCounters();

        // Empty the laps
        this.setState({laps: []});
    };


    /*
  	 * Update Main and Sub Counters
	   */
    updateCounters() {
        this.setState({
            main_string: this.format(this.main_counter.minutes) + ':' + this.format(this.main_counter.seconds) + '.' + this.format(this.main_counter.milli_seconds),
            sub_string: this.format(this.sub_counter.minutes) + ':' + this.format(this.sub_counter.seconds) + '.' + this.format(this.sub_counter.milli_seconds)
        });
    }


		/*
		 * Format the digit .. "9" -> "09"
		 */
    format(digit) {
        if (digit < 10) {
            return '0' + digit;
        }
        return digit;
    };

    componentWillMount() {
        this.init();
        this.init('sub');
    }

    render() {
        return (
            <div className="stopwatch">
                <div className="fixed">
                    {/* <div className="header">
                        Stopwatch
                        <span>using React.js</span>
                    </div> */}
                    <div className="main-counter">
                        {this.state.main_string}
                    </div>

                    <Controls start={this.start.bind(this)}
                              stop={this.stop.bind(this)}
                              reset={this.reset.bind(this)}
                              lap={this.lap.bind(this)}
                              is_running={this.state.is_running} />

                </div>

                <Laps laps={this.state.laps}
                      slowest_lap={this.state.slowest_lap}
                      fastest_lap={this.state.fastest_lap}
                      sub_string={this.state.sub_string} />

            </div>
        )
    }
}

export default Stopwatch