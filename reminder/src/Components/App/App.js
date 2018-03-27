import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addReminder } from '../../actions/index';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    addReminder = () => {
        // console.log('this of addReminder', this);
        this.props.addReminder(this.state.text);
    }

    renderReminders = () => {
        // Returns unordered list of reminders submitted by user
        const { reminders } = this.props;
        return (
            <ul className="list-group col-sm-4">
                {/* map over reminders to render each reminder individually as another list component*/}
                {
                    reminders.map(reminder => {
                        return (
                            <li key={reminder.id} className="list-group-item">
                                <div>{reminder.text}</div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        return (
            <div className="App">
                <div className="title">
                    Reminder
                </div>
                <div className="form-inline reminder-form">
                    <div className="form-group">
                        <input 
                            className="form-control" type="text"
                            placeholder="I have to..." 
                            onChange={event => this.setState({text: event.target.value})}
                        />
                    </div>
                    <button type="button" className="btn btn-success"
                    onClick={() => this.addReminder()}
                    >
                    Add reminder</button>
                </div>
                { this.renderReminders() }
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        reminders: state
    }
}

// Pass mapStateToProps to our connect function
export default connect(mapStateToProps, { addReminder })(App);

