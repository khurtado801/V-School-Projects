import React, {Component} from 'react'
import axios from "axios";
// import Musicbrainz from "musicbrainz";

// import Footer from "../../components/Footer";

// import Result from "../../pages/Result";
import Artist from "./Artist"
import Boxes from "../../../components/Boxes/"
// import Box from "../Box/"
// import Contact from "../Contact";
// import SearchForm from "../../SearchForm";
// import "./style.css";

// let mb = require('musicbrainz');
let mbapi = `http://musicbrainz.org/ws/2/cdstub/?query=artist:"beastie boys"&fmt=json`;
// let strUrl = "http://www.songsterr.com/a/ra/songs.json?pattern=Beastie%Boys";

class Artists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artistQuery: "",
            loading: true,
            err: false,
            errMsg: ""
        }
    }

    // Once it's mounted, it will make a GET request
    componentDidMount() {
        // Axios followed by whatever method we want to use Once this gets resolved,
        // 'then' do something
        axios.get(mbapi)
        // 'Then' takes a callback function The 'then' gives the callback function
        // whatever its response was from the GET request It's common to use 'response'.
            .then((response) => {
            // Declare and initialize variable to hold new data
            let cdstubs = response.data.cdstubs;
            console.log(response.data.cdstubs);
            // console.log(response.data.cdstubs[3].title)
            // Set state to new data, we don't need to know what the previous state was so
            // no callback function
            this.setState({
                // artistQuery set to cdstubs
                artistQuery: cdstubs,
                // If we get our results, set state to false
                loading: false
            });
        })
        // If there's a problem it sends us an error. So we put error in the callback
        // function
            .catch((err) => {
            // And just console log the error
            console.error(err);
            this.setState({loading: false, errMsg: err.message})
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            axios.get("http://musicbrainz.org/ws/2/cdstub/?query=artist:Beastie%Boys&fmt=json/")
            .then(response => {
                this.setState({
                    person: response.data
                })
            }) 
        }
    }


    render() {
        // Destruct state
        console.log(this.state)
        let {artistQuery, loading, err, errMsg} = this.state;
        return (
        //  Turnary operator If we are loading
        loading
            ? <div>
                    <h1>...here's a load...</h1>
                </div>
            // Nested turnary
            :
            // If error
            err
                ? <div>
                        {/* Display message */}
                        <p>No data available...</p>
                        <p>{errMsg}</p>
                    </div>

                // Else display this <div>
                : 
                <div>
                    <div className="search-wrapper">
                        <div className="wrapper">
                            <br/>
                            <h2>Mental Floss</h2>
                            <section className="checklist" id="services"></section>
                            <div className="para">
                                <p>
                                    <strong>"I see my life in terms of music.” ― Albert Einstein</strong>
                                </p>
                                <p>"Enter an artist's name in the box below for some brain candy.</p>
                            </div>
                            {/* <div className="ContactForm">
                                <ContactForm/>
                            </div> */}
                        </div>
                        {/* Callback function called for each element in the array */}
                        {artistQuery.map((artist, i) => {
                            {/* Return character component, which we have to make */}
                            return (
                                <div>
                                    <Artist key={i} {...artist}></Artist>
                                </div>
                            )
                        })}
                    </div>
                </div>
        )
    }
}

export default Artists


