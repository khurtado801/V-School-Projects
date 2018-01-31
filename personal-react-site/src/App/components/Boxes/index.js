import React from 'react';
import "./index.css";

function Box(props) {
    let {title, backgroundColor, color } = props;
    let style1 = { backgroundColor: backgroundColor, color: color }
    return (
        <div className="box" style={style1}>
            <h3>{title}</h3>
        </div>
    )
}

export default Box;
