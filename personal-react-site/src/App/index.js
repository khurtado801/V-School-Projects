import React from "react";
import {Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

import SearchForm from "./pages/SearchForm";
import Contact from "../App/pages/Contact";

import "./style.css";

function App(props) {
    return (
        <div>
            <div className="off-canvas-wrapper">
            <div id="off-canvas" class="off-canvas position-left" data-off-canvas></div>
                <div class="off-canvas-content" data-off-canvas-content>
                    {/* <div className="headerClass"> */}
                        <Header/>
                    {/* </div> */}
                    
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/searchform" component={SearchForm}/>
                        <Route path="/contact" component={Contact}/>
                    </Switch>
                    <div className="main" />
                    <div class="footerClass">
                        <Footer />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default App;