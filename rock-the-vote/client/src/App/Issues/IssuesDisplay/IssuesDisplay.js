import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIssues, addIssue } from '../../../redux/issues';
import Issue from './Issue/Issue';


class IssuesDisplay extends Component {
    componentDidMount() {
        this.props.getIssues();
    }

    render() {
        let { data, loading } = this.props.issues;
        return (
            !loading ?
                <div>
                    {data.sort((vote1, vote2) => {
                        vote1 = vote1.upvotes;
                        vote2 = vote2.upvotes;
                        if(vote1 > vote2){
                            return -1
                        } else if (vote1 < vote2) {
                            return 1;
                        } 
                        return 0;
                    })
                    .map((issue, index) => {
                        return <Issue key={index + issue.title} issue={issue} />
                    })}
                </div>
                :
                <div>
                    loading
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        issues: state.issues
    }
}

export default connect(mapStateToProps, { getIssues, addIssue })(IssuesDisplay);