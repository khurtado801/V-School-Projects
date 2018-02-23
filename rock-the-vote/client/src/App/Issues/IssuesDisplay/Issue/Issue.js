import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateIssue, deleteIssue } from '../../../../redux/issues';

import Comments from './Comments/Comments.js';

class Issue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideComments: true
        }
    }
    
    vote(type, issue) {
        if (type === 'up') {
            issue.upvotes = String(+issue.upvotes + 1);
        } else if (type === 'down') {
            issue.downvotes = String(+issue.downvotes + 1);
        }
        issue.totalVotes = String(+issue.totalVotes + 1);
        this.props.updateIssue(issue)

    }

    toggleDisplay = () => {
        this.setState({
            hideComments: false
        })
    }

    render() {
        console.log(this.props)
        let { issue, _id, index, deleteIssue } = this.props;
        return (
            <div className="issue-wrapper">
                <div className="issue-info">
                    <h1>{issue.title}</h1>
                    <p className="issue-description">{issue.description}</p>
                    <div className="voting">
                        <span className="total">Total Votes: {issue.totalVotes || 0}</span>
                        <div>
                            <button className="upVoteDownVote" onClick={() => {this.vote('up', issue)}}>Upvote: <span>{issue.upvotes || 0}</span></button>
                            <button className="upVoteDownVote" onClick={() => {this.vote('down', issue)}}>Downvote: <span>{issue.downvotes || 0}</span></button>
                            <button className='delete' type='button' onClick={() => {deleteIssue(issue._id)}}>Delete</button>
                        </div>
                    </div>
                    
                </div>
                <div>
                    <h4>Comments:</h4>
                    <Comments currIssue={issue}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        issues: state.issues
    }
}

export default connect(mapStateToProps, { updateIssue, deleteIssue })(Issue);