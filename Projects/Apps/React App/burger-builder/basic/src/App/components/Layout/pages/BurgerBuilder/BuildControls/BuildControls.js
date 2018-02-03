import React from 'react';

import BuildControl1 from './BuildControl1/BuildControl1.js';
import BuildControl2 from './BuildControl2/BuildControl2.js';
import BuildControl3 from './BuildControl3/BuildControl3.js';
import OrderButton from "./OrderButton/OrderButton.js";

const BuildControls = () => {
    return (
        <div>
            <BuildControl1 />
            <BuildControl2 />
            <BuildControl3 />
            <OrderButton />
        </div>
    )
}

export default BuildControls