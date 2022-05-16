const initialState = { // kind of a constructor 
    currentUser: null
}

export const user = (state = initialState, action) => { // reducer stores the state and update it when action is taken
    return {
        ...state,
        currentUser: action.currentUser
    }
}