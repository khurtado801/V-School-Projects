import React from "react";
import NavbarComponent from "../Header/NavComponent";
// import {Link} from "react-router-dom";

import "./style.css";

function Header(props) {
    return (
        <div class="header-wrapper">
        <NavbarComponent />
            <div class="title-wrapper">
                {/* <h1>Sine Wave</h1> */}
            </div>
        </div>
    )
}

export default Header;
