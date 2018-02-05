import React, { Component } from 'react';
import axios from 'axios';

import Votes from "./components/Votes/Votes.js";

class App extends Component {
    
    render() {
        return (
            <div className="App">
                <Votes />
            </div>
        )
    }
}
export default App;