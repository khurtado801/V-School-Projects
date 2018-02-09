import React, { Component } from 'react'

import './SearchForm.css';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.clearSearch = this.clearSearch.bind(this);
        this.clearDefaults = this.clearDefaults.bind(this);
    }
    //write handle Change function
    handleChange(e) {
        let { value } = e.target;
        this.setState({
            searchTerm: value
        })
    }

    //handlesubmit(e){
    // e.preventDefault();
    //  call this.props.submit(this.state.searchTerm)
    // }
    handleSubmit(e) {
        e.preventDefault();
        this.props.submit(this.state.searchTerm);
    }

    clearDefaults(e) {
        let {value} = e.target;
        this.props.SearchForm;
        this.setState({
            searchTerm: ''
        })
    }

    render() {
        let { searchTerm } = this.state;
        return (
            <div>
                <h1>Search for a module...</h1>
                <div className="form-style-3 field-style">
                    <form onSubmit={this.handleSubmit}>
                        <fieldset>
                            <label>
                                {/* <input onChange={this.handleChange} value={artistQuery} name="artist" type="text" /> */}
                                <input onChange={this.handleChange} value={searchTerm} name="searchTerm" type="text" placeholder="Search" />
                                <button type="submit">Search</button>
                                <button onClick={this.clearDefaults} type="button">Clear</button>
                            </label>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchForm