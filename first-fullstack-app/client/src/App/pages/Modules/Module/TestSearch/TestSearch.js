import React, { Component } from 'react'

import './SearchForm.css';
import Module from './';

class TestSearch extends Component {
    constructor(props){
        super();
        this.state = {
            userQuery: '',
        }
    }
    render () {
        console.log(this.props);
        return (
            <div>
                <h1>Search for a module...</h1>
                <div className="form-style-3">
                    <form>
                        <fieldset>
                            <label>
                                {/* <input onChange={this.handleChange} value={artistQuery} name="artist" type="text" /> */}
                                <input name="moduleSearch" type="text" placeholder="Search" />
                                <button type="submit">Search</button>
                            </label>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}

export default TestSearch