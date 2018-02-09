import React, { Component } from 'react'

import ModulesForm from '../../../components/ModulesForm/ModulesForm.js';
import Loading from "../../../../shared/Loading.js";
import SearchForm from '../../../components/SearchForm/SearchForm.js';

// import SearchForm from '../../../pages/Modules/Module/TestSearch/SearchForm.js';

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
        let {title, operation, manufacturer, size, powerConsumption, moduleDelete, moduleEdit, loading, _id} = this.props;
        return (
            loading ?
            <Loading />
            :
            <div className="module-wrapper">
                <div className="info-display-wrapper">
                    <div className="title">Title: {title} </div>
                    <div className="operation">Operation: {operation}</div>
                    <div className="manufacturer">Manufacturer: {manufacturer}</div>
                    <div className="size">Size: {size}</div>
                    <div className="powerConsumption">Power Consumption: {powerConsumption}</div>

                    <div className="buttons">
                        <button className='delete' type='button' onClick={() => {moduleDelete(_id)}}>X</button>
                        <button className='edit' type='button' onClick={this.toggleDisplay}>Edit</button>
                    </div>

                    <div style ={{display: this.state.isEditing ? 'initial' : 'none'}}>
                        <ModulesForm submit={moduleEdit} id={_id}></ModulesForm>
                    </div>
                </div>
            </div>
        )
    }
}

export default Module