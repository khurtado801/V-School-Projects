import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';

// get 'props' as argument
const Layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
            {/* 'main' element provided by HTML */}
        <main className={classes.Content} >
            {/* We want to output the component that we wrap with this layout */}
            {props.children}
        </main>
    </Aux>
);

export default Layout;
