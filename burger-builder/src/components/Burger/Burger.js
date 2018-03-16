import React from 'react'

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    // Output ingredients dynamically
    // We are getting ingredients via props which is an object, so we can't just loop through them.
    // We muts transform props object into an array of the values of the ingredients.
    // 'Object' is the default JavaScript object and not provided by React
    // The 'keys' method of 'Object' extracts the keys of a given object and turns that into an array.
    // In other words, 'keys' gives you an array of keys.
    // The elements in the new array are our properties from the ingredients object
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        // Transform string value into an array with as many elements as we have
        // ingredients for a given ingredient
        // Return array, use 'spread' operator to spread new array we have to construct using the 'Array()' method provided by JavaScript.
        // Set length of array to the amount of given ingredients
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        } );
    } )
    .reduce((arr,el) => {
        return arr.concat(el)
    }, []);
    // Check if reduced array is empty
if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
}

    // * SEE Above *
     // To determine if we have ingredients, we must reduce transformedIngredients array
    // If we check the length of the array we see that it is 4 empty arrays which doesn't help
    console.log(transformedIngredients);
    // We need the values of the inner arrays, so we must flatten the parent array to pullout values of inner arrays
    // and create one array that contains the values.
    // This is done by adding .reduce to transformedIngredients logic
    // Reduce is a buildin array function which transforms array into something else
    // It takes a function as input, and the function takes two arguements passed in automatically by JavaScript, the prevValue and currValue
   



    return (
        <div className={classes.Burger} >
        {/* define 'type' of BurgerIngredient, bread-top, bread-bottom, etc */}
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default Burger