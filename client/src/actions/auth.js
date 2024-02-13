import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGOUT } from "./types";
import api from "../utils/api";
import { setAlert } from './alert'
import setAuthToken from "../utils/setAuthToken";

//loads user by checking if token is correct
export const loadUser = () => async dispatch => {

    try {
        const res = await api.get('https://amazon-like-server.vercel.app/auth');

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

//registers the user
export const register = (formData) => async dispatch => {
    
    try {
        const res = await api.post('https://amazon-like-server.vercel.app/users', formData);
        setAuthToken(res.data.token);

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

//login the user
export const login = (email, password) => async dispatch => { 
    const body = { email, password}
    try {
        const res = await api.post('https://amazon-like-server.vercel.app/auth', body);

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

//logout and token to null
export const logout = () => async dispatch =>{
    setAuthToken();
    dispatch({
        type: LOGOUT
    })
}
