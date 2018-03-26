// actions/index.js

import {ADD_REMINDER} from '../constants';

export const addRemonder = (text) => {
    const action = {
        type: ADD_REMINDER,
        text: text
    }
    console.log('action in addReminder', action) // Used for debugging
    return action;
}