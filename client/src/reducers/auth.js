import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, USER_LOADED, AUTH_ERROR, LOGOUT } from "../actions/types";

const initalState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    navbarLoading: true,
    user: null
}

function authReducer (state = initalState, action) {
    const {type, payload} = action;
    switch(type){
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload,
                navbarLoading: false
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return{
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
            }
        case LOGIN_FAIL:
        case AUTH_ERROR:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            }
        case LOGOUT:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: true,
                navbarLoading: true,
                user: null
            }
        default:
            return state;
    }
}

export default authReducer;