import React, { Component } from 'react'
import axios from 'axios';

import Vote from "./Vote/Vote.js";
import Form from "../Form/Form.js";
import Loading from "../../shared/Loading.js"

class Votes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: [],
            loading: true
        };
        this.formSubmit = this.formSubmit.bind(this);
        this.voteDelete = this.voteDelete.bind(this);
    }

    componentDidMount() {
        axios.get("/vote")
        .then((response) => {
            console.log(response.data);
            this.setState({
                votes: response.data,
                loading: false
            })
        })
        .catch((err) => {
            console.error(err);
            this.setState({
                votes: [],
                loading: false
            })
        })
    }

    formSubmit(newVote) {
        // POST request local db
        axios.post("/vote", newVote)
        // Promise
        .then((response) => {
            console.log(response.data);
            this.setState(prevState => {
                let {votes} = prevState;
                return {
                    votes: [...votes, response.data.data],
                }
            })
        })
        .catch((err) => {
            console.error(err);
        });
    }
    

    voteDelete(id) {
        // Set vote object state to current 
        let {votes} = this.state;
        // Send delete request to local db at /vote containing id
        axios.delete("/vote/" + id)
        // Promise - if connection works 
        .then(response => {
            // Set current state
            this.setState({
                votes: votes.filter((vote, index) => {
                    return vote._id !== id
                }),
                loading: false
            });
        })
        .catch((err) => {
            console.error(err);
        });
    }

    render () {
        // Set vote object state to current state
        let {votes, loading} = this.state;
        return (
            loading ?
                <Loading />
                :
                <div className="votes-wrapper">
                    <Form add submit={this.formSubmit}></Form>
                    {votes.map((vote, index) => {
                        {/* return <Vote {...votes} key={index} voteDelete={this.voteDelete} voteEdit={this.voteEdit}></Vote>; */}
                        return <Vote {...vote} key={index} voteDelete={this.voteDelete}></Vote>;
                    })}
                </div>
        )
    }
}

export default Votes