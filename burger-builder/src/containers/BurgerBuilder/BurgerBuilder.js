import React, { Component } from 'react';

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';

export default class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        // initialize state with ingredients object
        this.state = {
            ingredients: {
                salad: 1,
                bacon: 1,
                cheese: 2,
                meat: 2
            }
        }
    }

    render() {
        // console.log(this.state.ingredients)
        // let {salad, bacon, cheese, meat} = this.state.ingredients;

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </Aux>
        )
    }
}
