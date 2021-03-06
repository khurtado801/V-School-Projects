import React, { Component } from 'react'

import Modal from './Modal/Modal.js';

import "./ModulesForm.css";

class ModulesForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                title: "",
                operation: "",
                manufacturer: "",
                size: "",
                isOpen: false
            },
        }
        this.handleChange = this.handleChange.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
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
        })
    }

    clearInputs = () => {
        this.setState({
            inputs: {
                title: "",
                operation: "",
                manufacturer: "",
                size: "",
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
            this.props.submit(this.state.inputs, id);
            // call toggle display function here
        }
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render () {
        // Deconstruct inputs
        let {title, operation, manufacturer, size} = this.state.inputs;
        return (
            <div className="app">
                <div className='addModule-button-wrapper'>
                    {/* <h2>Click on the button below to add a module</h2> */}
                    <button onClick={this.toggleModal}>Enter Module Info</button>
                </div>
                <Modal show={this.state.isOpen} onClose={this.toggleModal}>
                    <form className="form-wrapper form-style-9" onSubmit={this.handleSubmit}>
                        <h2>Enter module info...</h2>
                            <ul>
                                <li>
                                    <input onChange={this.handleChange} className="title field-style field-split align-left" value={title} type="text" name="title" placeholder="Title" />
                                    <input onChange={this.handleChange} className="operation field-style field-split align-right" value={operation} type="text" name="operation" placeholder="Operation" />
                                </li>
                                <li>
                                    <input onChange={this.handleChange} className="manufacturer field-style field-split align-left" value={manufacturer} type="text" name="manufacturer" placeholder="Manufacturer" />
                                    <input onChange={this.handleChange} className="size field-style field-split align-right" value={size} type="text" name="size" placeholder="Size" />
                                </li>
                                <li>
                                    <button className="submit" type="submit">Submit Module Info</button>
                                </li>
                            </ul>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default ModulesForm