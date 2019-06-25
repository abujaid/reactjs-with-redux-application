import axios from "axios";
import { API_URL } from "../../util/UrlUtil";
import * as actionTypes from '../../constants/login'

export function login (formData = {})
{
    return async dispatch =>
    {
        if (Object.keys(formData).length > 0) {
            // dispatch({ type: VALIDATE_BEGIN, payload: {} });
            dispatch({ type: actionTypes.LOGIN_BEGIN, payload: {} });
            await axios
                .post(`${API_URL}/api/login`, formData)
                .then(response =>
                {
                    console.log(response)
                    localStorage.setItem("jwtToken", JSON.stringify(response.data));
                    dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: response.data });
                })
                .catch(error =>
                    dispatch({ type: actionTypes.LOGIN_ERROR, payload: error.response.data })
                );
        }
        else {
            dispatch({ type: actionTypes.LOGIN_RESET, payload: {} });
        }
    };
}
