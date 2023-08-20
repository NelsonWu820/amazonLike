import { LOGIN_SUCCESS, LOGIN_FAIL } from "./types";
import axios from "axios";
import { setAlert } from './alert'

export const login = ({email, password}) => async dispatch => {
    const config = {
        headers : {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({email, password})
    
    try {
        const res = await axios.post('/api/auth', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
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