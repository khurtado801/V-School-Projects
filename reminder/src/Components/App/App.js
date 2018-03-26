import React, { Component } from 'react'


export default class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="title">
                    Reminder
                </div>
                <div className="form-inline">
                    <div className="form-group">
                        <input 
                            className="form-control" type="text"
                            placeholder="I have to..."
                        />
                    </div>
                    <button type="button" className="btn btn-success">Add reminder</button>
                </div>
            </div>
        )
    }
}
