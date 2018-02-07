import React from 'react'
import {connect} from 'react-redux';

import {handleCount} from '../../../redux/count.js';

function Counter(props) {
    // Destruct props
    let {count, handleCount} = props;
    let handleClick = (e) => {
        e.target.name === "plus" ? handleCount(1) : handleCount(-1);
    }


    return (
        <div>
            <button name="plus" onClick={handleClick}>+</button>
            <h1>Count: {count}</h1>
            <button name="minus" onClick={handleClick}>-</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {count: state.count}
    // This is the same as the statement 'return state'
}
// mapStateToProps is the specfic part of state we like
// handleCount is the specific action creator we want
// we connect them to the Counter component, and it now has that info
// as a property on the props object
export default connect(mapStateToProps, {handleCount}) (Counter);
