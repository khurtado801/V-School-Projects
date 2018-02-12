import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';

import Header from './components/Header/Header.js';
import LeftSideBar from './components/SideBars/LeftSideBar/LeftSideBar.js';
import Main from './components/Main/Main.js';
import RightSideBar from './components/SideBars/RightSideBar/RightSideBar.js'
// import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';

import Home from './pages/Home/Home.js';
import Modules from './pages/Modules/Modules.js';
import Contact from './pages/Contact/Contact.js';


import './App.css';

class App extends Component {
    render () {
        return (
            <div>
                <div className='hg'>
                    <div className='hg_header'>
                        <Header />
                    </div>
                    <div className='hg_left'>
                        <LeftSideBar></LeftSideBar>
                    </div>
                    <div className='hg_main'>
                    <Main />
                        <Switch>
                            {/* <Route exact path='/' component={Home} /> */}
                            <Route path="/modules" component={Modules} />
                            <Route path="/contact" component={Contact} />
                        </Switch>
                    </div>
                    <div className='hg_right'>
                        <RightSideBar></RightSideBar>
                    </div>
                    <div className='hg_footer'>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default App