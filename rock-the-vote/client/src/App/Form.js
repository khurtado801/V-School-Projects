import React, { Component } from 'react'

import './Form.css';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                title: '',
                description: ''
            }
        }
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState((prevState) => {
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
                title: '',
                description: ''
            }
        })
    }

    handleSubmit = (e) => {
        let { add, id } = this.props;
        e.preventDefault();
        this.clearInputs();
        if (add) {
            this.props.submit(this.state.inputs)
        } else {
            this.props.submit(this.state.inputs, id)
        }
    }

    render() {
        let { title, description } = this.state.inputs;
        return (
            <div className="hg_main">
                <div className="form-wrapper">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-items-wrapper">
                            <h1>Submit the title and description of your issue here:</h1>
                            <div className="form-item-wrapper">
                                <input  type="text" onChange={this.handleChange} placeholder="Title" name="title" value={title} />
                                <textarea type="text" onChange={this.handleChange} placeholder="Description" name="description" value={description} />
                            </div>
                                <button className='submit' type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}