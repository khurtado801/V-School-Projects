// reducers/index.js 
// Reducer takes state in action and return new state

import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

const reminder = (action) => {
    let { text, dueDate } = action;
    return {
        id: Math.random(),
        text,
        dueDate
    }
}

const removeById = (state = [], id) => {
    // Use filter to return new array of data
    // Filter out reminder whos id is equal to our past id
    // Filter will return anything that passes our equality check
    // So it will return instead whether or not the reminder.id is not equal to the id
    // So we have an array of all objects not specified by clicking it
    const reminders = state.filter(reminder => reminder.id !== id);
    console.log('new reduced reminders', reminders);
    return reminders
}

// Reminders reducer
const reminders = (state = [], action) => {
    let reminders = null;
    switch(action.type) {
        case ADD_REMINDER:
            // use spread operator to copy state to reminders
            reminders = [...state, reminder(action)];
            console.log('reminders as state', reminders) // Use for debugging
            return reminders;
        case DELETE_REMINDER:
            reminders = removeById(state, action.id);
            return reminders;
        default:
            return state;
    }
}

// Export reducer
export default reminders;
