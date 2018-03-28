// actions/index.js
// Action creator

import {ADD_REMINDER, DELETE_REMINDER} from '../constants';

export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text: text,
        dueDate: dueDate
    }
    console.log('action in addReminder', action) // Used for debugging
    return action;
}

export const deleteReminder = (id) => {
    // Define action
    const action = {
        type: DELETE_REMINDER,
        id: id
    }
    console.log('deleting in actions', action)
    return action;
}