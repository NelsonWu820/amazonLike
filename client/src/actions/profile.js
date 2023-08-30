import { PROFILE_SUCCESS, PROFILE_ERROR, PROFILE_UPDATE } from "./types";
import api from "../utils/api";

export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await api.get('/profile/me')

        dispatch({
            type: PROFILE_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        console.log("Register Error:", err);
        const errors = err.response.data.errors;

        if (errors) {
          errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR
        });
    }
}

//make or update a profile
export const updateProfile = (formData, edit = false) => async dispatch => {
    try {
        const res = api.post('/profile/edit', formData);

        dispatch({
            type: PROFILE_UPDATE,
            payload: res.data
        })

        dispatch(
            setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success')
        );
    } catch (err) {
        console.log("Register Error:", err);
        const errors = err.response.data.errors;

        if (errors) {
          errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR
        });
    }
}