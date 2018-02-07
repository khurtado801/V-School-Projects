import React, { Component } from 'react'
import axios from "axios";

import Form from '../../../components/Form/Form.js';
import Loading from "../../../../shared/Loading.js";

class Module extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modules: [],
            isEditing: false,
            loading: true,
            displayForm: false,
            module: []
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
        this.moduleEdit = this.moduleEdit.bind(this);
    }

    toggleDisplay() {
        this.setState((prevState) => {
            return {
                isEditing: !this.state.isEditing
            }
        })
    }

    moduleEdit(updatedModule, id) {
        console.log('new fourth step')
        // Set votes state to current state
        let {modules} = this.props
        axios.put("/module/" + id, updatedModule)
        // Promise - if connection is works
        .then(response => {
            let {data} = response.data;
            this.setState((prevState) => {
                console.log('new fifth step')
                return {
                modules: [...prevState.modules, data],
                displayForm: false,
                vote: this.state.modules.map((module) => {
                    if (module._id === id) {
                        return response.data;
                    } else {
                        return module
                    }
                }),
                loading: false
            }})
            console.log('new sixth step')
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
        let {modules, title, operation, manufacturer, size, powerConsumption, moduleDelete, moduleEdit, loading, displayForm, _id} = this.props;
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
                    <div style ={{display: this.state.isEditing ? 'initial' : 'none'}}>
                        <Form submit={this.moduleEdit} id={_id}></Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Module