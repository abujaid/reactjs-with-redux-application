import * as actionTypes from '../constants/signup'


const signupReducer = (state = {}, action) =>
{
    switch (action.type) {
        case actionTypes.SIGNUP_BEGIN:
        case actionTypes.SIGNUP_SUCCESS:
        case actionTypes.SIGNUP_ERROR:
        case actionTypes.SIGNUP_RESET:
            return Object.assign({}, action.payload)
        default:
            return Object.assign({}, state)
    }
}

export default signupReducer