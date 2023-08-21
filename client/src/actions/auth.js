import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR } from "./types";
import axios from "axios";
import { setAlert } from './alert'
import setAuthToken from "../utils/setAuthToken";

export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/auth');

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
        const res = await axios.post('/api/users/', formData);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser());
    } catch (err) {
        console.log("Register Error:", err);
        const errors = err.response.data.errors

        if(errors){
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: REGISTER_FAIL
        });

    }
}

export const login = ({email, password}) => async dispatch => {
    const config = {
        headers : {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({email, password})
    
    try {
        const res = await axios.post('/auth', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser());
    } catch (err) {
        console.log("Login Error:", err);
        const errors = err.response.data.errors

        if(errors){
            errors.map((error) => dispatch(setAlert(err.message, 'danger')))
        }

        dispatch({
            type: LOGIN_FAIL
        });

    }
}