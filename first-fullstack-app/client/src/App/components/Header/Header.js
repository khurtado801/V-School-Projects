import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Nav, NavItem} from 'reactstrap';  

import './Header.css';
import homeIcon from '../../../images/home8small.png'
import emailIcon from '../../../images/email8.png';


function Header(props) {
    const email = ''
    return (
        <div className="main-header-wrapper">
            <div>
                <div className="nav">
                    <div className="header-links">
                        <div className="nav-items-wrapper">
                            <ul className="header-items">
                                <li>
                                    <Link to="/modules">Modules</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
