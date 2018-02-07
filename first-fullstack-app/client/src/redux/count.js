const count = (prevCount = 666, action) => {

    switch(action.type) {
        // Reducer
        case "HANDLE_COUNT":
            // return action.amount + prevCount;
            // DO any logic we want here
            // If prevCount is equal to zero, return
            // if not return prevCount plus the action amount
            return prevCount === 0 ? prevCount : prevCount + action.amount
        default:
        return prevCount;
    }
}

// Action dispatcher
export const handleCount = (amount) => {
    return {
        type: "HANDLE_COUNT",
        amount: amount
    }
}

export default count;