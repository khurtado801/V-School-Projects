import React, { Component } from 'react'
import axios from "axios";

import Form from "../../Form/Form.js";
import Loading from "../../../shared/Loading.js"

class Vote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: [],
            isEditing: false,
            loading: true,
            displayForm: false
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
        this.voteEdit = this.voteEdit.bind(this);
    }

    toggleDisplay() {
        this.setState((prevState) => {
            return {
                isEditing: !this.state.isEditing
            }
        })
    }

    voteEdit(updatedVote, id) {
        // console.log()
        // Set votes state to current state
        let {votes} = this.state
        axios.put("/vote/" + id, updatedVote)
        // Promise - if connection is works
        .then(response => {
            let {data} = response;
            this.setState({
                votes: data,
                displayForm: false,
                votes: votes.map((vote) => {
                    if (vote._id === id) {
                        return response.data;
                    } else {
                        return vote
                    }
                }),
                loading: false
            })
        })
        .catch((err) => {
            console.error(err);
        })
    }

    // voteEdit(id) {
    //     let {id} = this.props
    // }

    render () {
        // let {title, description, upDownVote, totalVotes, voteDelete, _id, voteEdit} = this.props
        let {title, description, upvotes, downvotes, comment, voteDelete, voteEdit, loading, displayForm, _id} = this.props;
        console.log(_id);
        return (
            loading ?
            <Loading />
            :
            <div className="vote-wrapper">
                <div className="info-display-wrapper">
                    <p className="title">Title: {title}</p>
                    <p className="description">Description: {description}</p>
                    <p className="upDownVote">Upvotes: {upvotes}</p>
                    <p className="upDownVote">Downvotes: {downvotes}</p>
                    <p className="totalVotes">Total Votes: {upvotes + downvotes}</p>
                    <p className="comment">Comment: {comment}</p>
                    <button className='delete' type='button' onClick={() => {voteDelete(_id)}}>X</button>
                    <button className='edit' type='button' onClick={() => {this.voteEdit(_id); this.toggleDisplay() }}>Edit</button>
                    <div style ={{display: this.state.isEditing ? 'initial' : 'none'}}>
                        <Form submit={voteEdit} id={_id}></Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Vote