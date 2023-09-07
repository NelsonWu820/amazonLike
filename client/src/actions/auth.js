import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGOUT } from "./types";
import api from "../utils/api";
import { setAlert } from './alert'
import setAuthToken from "../utils/setAuthToken";

export const loadUser = () => async dispatch => {

    try {
        const res = await api.get('/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        console.log("Load User Error:", err)
        
        dispatch({
            type: AUTH_ERROR
        })
    }
} 

export const register = (formData) => async dispatch => {
    
    try {
        const res = await api.post('/users', formData);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser());
    } catch (err) {
        console.log("Register Error:", err);
        const errors = err.response.data.errors;

        if (errors) {
          errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: REGISTER_FAIL
        });

    }
}

export const login = (email, password) => async dispatch => { 
    const body = { email, password}
    try {
        const res = await api.post('/auth', body);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

        setAuthToken(res.data.token);

        dispatch(loadUser());
    } catch (err) {
        console.log("Login Error:", err);
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: LOGIN_FAIL
        });

    }
}

export const logout = () => 
        ({
            type: LOGOUT
        })
