import React from 'react';
import {Link} from "react-router-dom";
import { Nav, NavItem} from 'reactstrap';

import "./style.css";

function NavComponent() {
  return (
    <div>
      <div class="links">
        <div class="Nav">
          <Nav pills>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/searchform">Search Form</Link>
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
export default NavComponent
