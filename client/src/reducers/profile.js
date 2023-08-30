import { PROFILE_GET, PROFILE_ERROR, PROFILE_UPDATE } from "../actions/types";

const initalState = {
    profile: null,
    loading: true,
    error: []
}

function profileReducer(state = initalState, action){
    const { type, payload} = action
    switch(type){
        case PROFILE_GET:
        case PROFILE_UPDATE:
            return {
                ...state,
                profile: payload,
                loading: false
            }
        case PROFILE_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }

        default:
            return state;
    }
}

export default profileReducer;