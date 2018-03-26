// reducers/index.js 
// Reducer takes state in action and return new state

import { ADD_REMINDER } from '../constants';

const reminder = (action) => {
    return {
        text: action.text,
        id: Math.random()
    }
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
        default:
            return state;
    }
}

// Export reducer
export default reminders;
