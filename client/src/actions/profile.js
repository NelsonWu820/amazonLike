import { PROFILE_GET, PROFILE_ERROR, PROFILE_UPDATE, ACCOUNT_DELETE, LOGOUT } from "./types";
import api from "../utils/api";
import { setAlert } from "./alert";

//gets current profile
export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await api.get('/profile/me')

        dispatch({
            type: PROFILE_GET,
            payload: res.data
        })
    } catch (err) {
        z
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
        z
        const errors = err.response.data.errors;

        if (errors) {
          errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR
        });
    }
}

//delete profile
export const deleteAccount = () => async dispatch => {
    if(window.confirm('This can not be undone')){
        try {
            await api.delete('/profile');
    
            dispatch({type: ACCOUNT_DELETE})
            dispatch({type: LOGOUT})
    
            dispatch(setAlert("Profile Deleted", 'deleted'))
        } catch (err) {
            z
            const errors = err.response.data.errors;
    
            if (errors) {
              errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
            }
    
            dispatch({
                type: PROFILE_ERROR
            });
        }
    }
    
}