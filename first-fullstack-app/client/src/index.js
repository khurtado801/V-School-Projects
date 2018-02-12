import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './App/App.js';

import './index.css';

ReactDOM.render(
    <BrowserRouter>
        {/* This is the provider */}
            <App />
    </BrowserRouter>
, document.getElementById( 'root' ) );

