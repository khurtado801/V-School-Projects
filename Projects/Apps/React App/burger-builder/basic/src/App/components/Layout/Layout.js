import React from 'react';

// eslint-disable-next-line 
import Aux from '../../hoc/Aux';
import './Layout.css';

const layout = (props) => (
    <aux>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className="Content">
            {props.children}
        </main>
    </aux>
);

export default layout;