import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIssues, addIssue } from '../../redux/issues';
import Form from '../Form';

import IssuesDisplay from './IssuesDisplay/IssuesDisplay.js';

class Issues extends Component {
    constructor(props) {
        super(props);
    }

    formSubmit = (newIssue) => {
        this.props.addIssue(newIssue);
    }

    render() {
        return (
            <div>
                <Form add submit={this.formSubmit} />
                <IssuesDisplay />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        issues: state.issues
    }
}

export default connect(mapStateToProps, { getIssues, addIssue })(Issues);