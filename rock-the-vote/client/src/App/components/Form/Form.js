import React, { Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputs: {
                title: "",
                description: "",
                comment: [],
            },
        }
        this.handleChange = this.handleChange.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        let {name, value} = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
    }

    clearInputs = () => {
        this.setState({
            inputs: {
                title: "",
                description: "",
                upDownVote: "",
                totalVotes: "",
                comment: []
            },
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let {add, id} = this.props;
        this.clearInputs();
        if (add) {
            this.props.submit(this.state.inputs)
        } else {
            console.log("submit test")
            this.props.submit(this.state.inputs, id);
        }
    }

    render () {
        // Deconstruct inputs
        let {title, description, comment, upDownVote, totalVotes} = this.state.inputs;
        return (
            <div>
                <form className="form-wrapper" onSubmit={this.handleSubmit}>
                {/* <form onSubmit={this.handleSubmit}> */}
                    <h1>Submit your vote!</h1>
                    <label>Title: </label>
                        <input onChange={this.handleChange} className="title" value={title} name="title" type="text" placeholder="Title" />
                    <label>Description: </label>
                        <input onChange={this.handleChange} className="description" value={description} name="description" type="text" placeholder="Decscription" />
                        <label>Comment: </label>
                        <input onChange={this.handleChange} className="comment" value={comment} name="comment" type="text" placeholder="Comment" />
                    {/* <label>Total Votes: </label>
                        <input onChange={this.handleChange} className="totalVotes" value={totalVotes} name="totalVotes" /> */}
                    <button className="submit" type="submit" >Submit</button>
                    {/* <button>Submit</button> */}
                </form>
            </div>
        );
    }
}

export default Form;



