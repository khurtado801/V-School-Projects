import React, { Component } from 'react'

import './SearchForm.css';

class SearchForm extends Component {
    render () {
        return (
            <div>
                <h2>Search for a module...</h2>
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

export default SearchForm