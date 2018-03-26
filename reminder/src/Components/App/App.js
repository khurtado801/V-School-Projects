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

    addReminder() {
        // console.log('this of addReminder', this);
        this.props.addReminder(this.state.text);
    }

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
                            onChange={event => this.setState({text: event.target.value})}
                        />
                    </div>
                    <button type="button" className="btn btn-success"
                    onClick={() => this.addReminder()}
                    >
                    Add reminder</button>
                </div>
            </div>
        )
    }
}

// function  mapDispatchToProps(dispatch) {
//     return bindActionCreators({addReminder}, dispatch);
// }

export default connect(null, { addReminder })(App);

