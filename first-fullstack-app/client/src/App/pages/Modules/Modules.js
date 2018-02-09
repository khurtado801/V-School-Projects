import React, { Component } from 'react'
import axios from 'axios';

import Loading from '../../../shared/Loading.js';

import ModulesForm from '../../components/ModulesForm/ModulesForm.js';
// import Form from '../../components/Form/Form.js'
import Module from './Module/Module.js';
import SearchForm from '../../components/SearchForm/SearchForm.js';

import '../Modules/Modules.css'

class Modules extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modules: [],
            loading: true,
            searchTerm: ''
        };
        this.formSubmit = this.formSubmit.bind(this);
        this.moduleDelete = this.moduleDelete.bind(this);
        this.moduleEdit = this.moduleEdit.bind(this);
        this.setSearchTerm = this.setSearchTerm.bind(this);
        // this.clearSearch = this.clearSearch.bind(this);
        
        // this.toggleDisplay = this.toggleDisplay.bind(this);
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
                modules: [],
                loading: false
            })
        })
    }
    setSearchTerm(searchTerm){
        this.setState({
            searchTerm
        })
    }

    // clearSearch() {
    //     this.setState({
    //         searchTerm: ''
    //     })
    // }

    formSubmit(newModule) {
        // POST request to local db
        console.log('formSubmit first step')
        axios.post("/module", newModule)
        // Promise
        .then((response) => {
            this.setState(prevState => {
                let {modules} = prevState;
                console.log('formSubmit second step')
                return {
                    modules: [...modules, response.data.data]
                }
            })
        })
        .catch((err) => {
            console.error(err);
        });
    }

    moduleDelete(id) {
        console.log('moduleDelete first step');
        // Set module object state to current
        let {modules} = this.state;
        // Send delete request to local db at /module containing id
        axios.delete("/module/" + id)
        // Promise - if connection is established
        .then(response => {
            console.log('moduleDelete second step');
            // Set current state
            this.setState({
                modules: modules.filter((module, index) => {
                    console.log('moduleDelete third step');
                    return module._id !== id
                }),
                loading: false
            });
        })
        .catch((err) => {
            console.error(err);
        });
    }
    moduleEdit(updatedModule, id){
        //make your put request
        axios.put("/module/" + id, updatedModule)
        // Promise - if connection is established
        .then(response => {
            // let {data} = response.data;
            console.log(response.data)
            this.setState((prevState) => {
                return {
                    modules: this.state.modules.map((module) => {
                        if (module._id === id) {
                            return response.data.data;
                        } else {
                            return module
                        }
                    })
                }
                // loading: false
            })
        })
    }

    render () {
        const fullModules = this.state;
        console.log(fullModules);
        // Set module object state to current state
        let {modules, loading, searchTerm} = this.state;
        console.log(searchTerm);
                return (
                    loading ?
                        <Loading />
                        :
                        <div>
                         <SearchForm submit={this.setSearchTerm} />
                            <div className="modules-wrapper">
                                <ModulesForm add submit={this.formSubmit} ></ModulesForm>

                                {modules.filter(module=>{
                                    //only return true of the search term somehow matches the module
                                    return module.title.toLowerCase().includes(searchTerm);
                                }).map((module, index) => {
                                    return <Module {...module} key={index} moduleDelete={this.moduleDelete} moduleEdit={this.moduleEdit}></Module>
                                })}
                            </div>
                        </div>
                )
    }
}

export default Modules