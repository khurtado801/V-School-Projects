import React, { Component } from 'react'
import axios from "axios";

import Boxes from "../../components/Boxes"
import "./style.css";

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artistQuery: "",
            tracks: []
        }

        this.getRequest = this
            .getRequest
            .bind(this);
        this.handleChange = this
            .handleChange
            .bind(this);

        this.clearInputs = this
            .clearInputs
            .bind(this);
    }

    getRequest(e) {
        e.preventDefault();
        axios
            .get(`http://musicbrainz.org/ws/2/cdstub/?query=artist:${this.state.artistQuery}&fmt=json`)
            .then((response) => {
                console.log(response.data);
                let { cdstubs } = response.data;
                this.setState({ tracks: cdstubs });
                this.clearInputs();
            })
            .catch((err) => console.error(err));
    }

    handleChange(e) {
        let { value } = e.target;
        this.setState((prevState) => {
            return { artistQuery: value }
        })
    }

    clearInputs() {
        this.setState({ artistQuery: "",})
    }

    render() {
        let { artistQuery, tracks} = this.state;
        return (
            <div>
            <h2>How you roll...</h2>
            <ul>
                <li><strong>"Music is a world within itself, it's a language we all understand." - Stevie Wonder</strong></li>
                <li>Enter the artist's name in the box below for some tasty treats.</li>
            </ul>
            <div className="form-style-3">
                <form onSubmit={this.getRequest}>
                    <fieldset>
                        <label>
                            <input onChange={this.handleChange} value={artistQuery} name="artist" type="text" />
                            <button type="submit">Search</button>
                        </label>
                    </fieldset>
                </form>
                    <div className="box-wrapper">
                        {tracks.map((artist, i) => { return (
                            <Boxes key={i}{ ...artist}> </Boxes>
                        ) })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchForm;