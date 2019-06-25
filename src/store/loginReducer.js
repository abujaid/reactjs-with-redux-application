import * as actionType from '../constants/login'

function LoginReducer (state = {}, action)
{
    switch (action.type) {
        case actionType.LOGIN_BEGIN:
        case actionType.LOGIN_SUCCESS:
        case actionType.LOGIN_ERROR:
        case actionType.LOGIN_RESET:
            return Object.assign({}, action.payload);
        default:
            return Object.assign({}, state);
    }
}

export default LoginReducer;