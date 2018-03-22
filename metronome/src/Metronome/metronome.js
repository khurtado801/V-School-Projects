import React, { Component } from 'react'

import './metronome.css';
import click1 from '../shared/click1.wav';
import click2 from '../shared/click2.wav';

export default class metronome extends Component {
    // initialize state
    constructor(props) {
        super(props);
            this.state = {
                playing: false,
                count: 0,
                bpm: 100,
                beatsPerMeasure: 4
            };
            
            // create audio objects with the files
            this.click1 = new Audio(click1);
            this.click2 = new Audio(click2);

    }

    handleBpmChange = e => {
        let bpm = e.target.value;
        
        if(this.state.playing) {
            // Stop the old timer and start a new one
            clearInterval(this.timer);
            this.timer = setInterval(this.playClick, (60 /  bpm) * 1000);

            // Set the new BPM, and reset the beat counter
            this.setState({
                count: 0,
                bpm
            });
        } else {
            // Otherwise just update the BPM
            this.setState({bpm});
        }
    }

    playClick = () => {
        let {count, beatsPerMeasure} = this.state;

        // The first beat will have a different sound than the others
        if(count % beatsPerMeasure === 0) {
            this.click2.play();
        } else {
            this.click1.play();
        }
        // Keep track of which beat we're on
        this.setState(state => ({
            count: (state.count + 1) % state.beatsPerMeasure
        }));
    }

    startStop = () => {
        // if metronome is playing stop it, clear timer, set playing state to false, this causes app tp re-render
        if(this.state.playing) {
            // stop timer
            clearInterval(this.timer);
            this.setState({
                playing: false
            });
        } else {
            // snot playing, start a timer that plays a click every few milliseconds, depending on bpm
            this.timer = setInterval(this.playClick, (60 / this.state.bpm) * 1000);
            this.setState({
                count: 0,
                playing: true
                // play a click  "immediatley" (after setState finishes)
            }, this.playClick);
        }
    }
    
  render() {
      let {playing, bpm} = this.state; // deconstruct state

    return (
      <div className="metronome">
        <div className="bpm-slider">
            <div>{bpm} BPM</div>
            <input type="range" min="60" max="240" value={bpm} onChange={this.handleBpmChange}/>
                <div>
                    {/* add the onClick handler: */}
                    <button onClick={this.startStop}>{playing ? 'Stop' : 'Start'}</button>
                </div>
        </div>
      </div>
    )
  }
}
