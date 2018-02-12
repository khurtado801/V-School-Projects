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
        this.props.clearSearch();
        this.setState({
            searchTerm: ''
        })
    }

    render() {
        let { searchTerm } = this.state;
        let {clearSearch} = this.props;
        return (
            <div className='search-modules-wrapper'>
                <div className="search-info-display-wrapper">
                {/* Search for a module */}
                    <div className="search-module-info">
                        <form onSubmit={this.handleSubmit}>
                            {/* <fieldset> */}
                                {/* Search for a module */}

                                        {/* <input onChange={this.handleChange} value={artistQuery} name="artist" type="text" /> */}
                                        <input onChange={this.handleChange} value={searchTerm} name="searchTerm" type="text" placeholder="Search" />
                                        {/* <div className="buttons-wrapper">
                                            <button type="submit">Submit Search</button>
                                            <button onClick={this.clearDefaults} type="button">Clear Search</button>
                                        </div> */}

                            {/* </fieldset> */}
                        </form>
                    </div>
                </div>
                <div className="buttons-wrapper">
                                            <button type="submit">Submit Search</button>
                                            <button onClick={this.clearDefaults} type="button">Clear Search</button>
                                        </div>
            </div>
        )
    }
}

export default SearchForm