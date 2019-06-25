import { combineReducers } from 'redux'
import SignupReducer from '../store/signupReducer';
import LoginReducer from '../store/loginReducer';


const reducer = combineReducers({
    Login: LoginReducer,
    Signup: SignupReducer
})

export default reducer;