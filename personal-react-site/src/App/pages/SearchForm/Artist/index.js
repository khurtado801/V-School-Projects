import React, {Component} from 'react'
import {Link} from 'react-router-dom';

class Artist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: {},
            loading: true
        }
    }
    render() {
        let {title, artist} = this.props;
        console.log(this.state);
        return (

            <div>
                <h3>{artist}</h3>
                <h4>{title}</h4>
            </div>
        )
    }
}

export default Artist;