import React, { Component } from 'react'

import Form from '../../../components/Form/Form.js';
import Loading from "../../../../shared/Loading.js";

import './Module.css';

class Module extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            loading: true,
            displayForm: false
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }

    toggleDisplay() {
        this.setState((prevState) => {
            return {
                isEditing: !this.state.isEditing
            }
        })
    }


    render () {
        console.log(this.props);
        
        let {title, operation, manufacturer, size, powerConsumption, moduleDelete, moduleEdit, loading, _id} = this.props;

        return (
            loading ?
            <Loading />
            :
            <div className="module-wrapper">
                <div className="info-display-wrapper">
                    <p className="title">Title: {title}</p>
                    <p className="operation">Operation: {operation}</p>
                    <p className="manufacturer">Manufacturer: {manufacturer}</p>
                    <p className="size">Size: {size}</p>
                    <p className="powerConsumption">Power Consumption: {powerConsumption}</p>
                    <fieldset>
                        <button className='delete' type='button' onClick={() => {moduleDelete(_id)}}>X</button>
                        <button className='edit' type='button' onClick={this.toggleDisplay}>Edit</button>
                    </fieldset>
                    <div style ={{display: this.state.isEditing ? 'initial' : 'none'}}>
                        <Form submit={moduleEdit} id={_id}></Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Module