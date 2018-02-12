import React, { Component } from 'react'

import './Footer.css';
import muff from '../../../images/muff.png';
import analog from '../../../images/analog.png';
import grid from '../../../images/grid.png';

class Footer extends Component {
  render() {
      const muffUrl = "https://www.muffwiggler.com";
      const havenUrl = "http://analoguehaven.com";
      const modularGridUrl = "https://www.modulargrid.net/e/racks/view/382782";


    return (
        <div className='footer-wrapper'>
            <div>
                <div className="nav">
                    <div className="header-links">
                        <div className="nav-items-wrapper">
                            <ul className="footer-items">
                                <li>
                                    <a href={muffUrl}><img src={muff} /></a>
                                </li>
                                <li>
                                    <a href={havenUrl}><img src={analog} /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
export default Footer;
