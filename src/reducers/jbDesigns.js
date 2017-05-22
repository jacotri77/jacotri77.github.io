const initialState = {
    forms: [
    {
        "firstName":"",
        "lastName":"",
        "emailAddress":"",
        "comments": ""
    }
],
    
    
}

export default function Reducer(state=initialState, action) {
    console.log('from reducer', action.forms)
    switch (action.type) {
        case 'POST_FORM':
            return {state, forms: [state.forms, action.forms]}
        case 'ADD_USER':
            return {...state, users: [...state.users, action.user]}
        default:
            return state
    }
}
