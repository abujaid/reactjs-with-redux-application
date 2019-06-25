import axios from 'axios';
import { API_URL } from '../../util/UrlUtil'
import * as actionTypes from '../../constants/signup';

export function signup (formData = {})
{
    return async dispatch =>
    {
        dispatch({ type: actionTypes.SIGNUP_BEGIN, payload: {} })
        await axios.post(`${API_URL}/api/register`, formData)
            .then(response => dispatch({ type: actionTypes.SIGNUP_SUCCESS, payload: response.data })
            )
            .catch(error => dispatch({ type: actionTypes.SIGNUP_ERROR, payload: error.response.data }))
    }
}