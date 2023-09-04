import { ITEMS_GET, ITEMS_ERROR } from "../actions/types";

const initialState = {
    items: [],
    item: null,
    loading: true
}

function itemReducer(state = initialState, action){
    const { type, payload} = action
    switch(type){
        case ITEMS_GET:
            return {
                ...state,
                items: payload,
                laoding: false
            }
        case ITEMS_ERROR:
            return {
                ...state,
                items: [],
                item: null,
                loading: false
            }
        default:
            return state;
    }
}

export default itemReducer;