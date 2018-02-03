import React from 'react';

const BurgerIngredient = (props) => (
    let ingredient = null;

    switch (props.type) {
        case ('breadBottom')
            ingredient = <div className={classes.BreadBottom></div>;
    }


export default BurgerIngredient;
