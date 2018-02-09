import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Nav, NavItem} from 'reactstrap';   

class LeftSideBar extends Component {
    render () {
        return (
            <div>
                <div className="links">
                    <div className="Nav">
                        <Nav pills>
                            <NavItem>
                                <Link to="/">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/modules">Search</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/contact">Contact</Link>
                            </NavItem>
                        </Nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftSideBar