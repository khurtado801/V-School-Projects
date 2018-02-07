import React, { Component } from 'react'
import axios from 'axios';

import Loading from '../../../shared/Loading.js';

import Form from '../../components/Form/Form.js'
import Module from './Module/Module.js';

class Modules extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modules: [],
            loading: true
        };
        this.formSubmit = this.formSubmit.bind(this);
        this.moduleDelete = this.moduleDelete.bind(this);
    }
    componentDidMount(){
        console.log("GET request");
        axios.get("/module")
        .then((response) => {
            console.log(response.data)
            this.setState({
                modules: response.data,
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

    formSubmit(newModule) {
        // POST request to local db
        axios.post("/module", newModule)
        // Promise
        .then((response) => {
            this.setState(prevState => {
                let {modules} = prevState;
                return {
                    modules: [...modules, response.data]
                }
            })
        })
        .catch((err) => {
            console.error(err);
        });
    }

    moduleDelete(id) {
        // Set module object state to current
        let {modules} = this.state;
        // Send delete request to local db at /module containing id
        axios.delete("/module" + id)
        // Promise - if connection is established
        .then(response => {
            // Set current state
            this.setState({
                modules: modules.filter((module, index) => {
                    return module._id !== id
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
        let {modules, loading} = this.state;
                return (
                    loading ?
                        <Loading />
                        :
                        <div className="modules-wrapper">
                            <Form add submit={this.formSubmit}></Form>
                            {modules.map((module, index) => {
                                {/* return <Vote {...votes} key={index} voteDelete={this.voteDelete} voteEdit={this.voteEdit}></Vote>; */}
                                return <Module {...module} key={index} moduleDelete={this.moduleDelete}></Module>;
                            })}
                        </div>
                )
    }
}

export default Modules