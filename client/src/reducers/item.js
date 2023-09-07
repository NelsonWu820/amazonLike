import { ITEMS_GET, ITEMS_ERROR, ITEM_GET, REMOVE_ITEM, COMMENT_ADDED } from "../actions/types";

const initialState = {
    items: [],
    item: null,
    loading: true
}

function itemReducer(state = initialState, action){
    const { type, payload} = action
    switch(type){
        case COMMENT_ADDED:
            return{
                ...state,
                item: {...state.item, comments: payload},
                loading: false
            }
        case ITEMS_GET:
            return {
                ...state,
                items: payload,
                item: payload[0],
                loading: false
            }
        case ITEM_GET:
            return {
                ...state,
                item: payload,
                loading: false
            }
        case ITEMS_ERROR:
            return {
                ...state,
                items: [],
                item: null,
                loading: false
            }
        case REMOVE_ITEM:
            return {
                ...state,
                item: null
            }
        default:
            return state;
    }
}

export default itemReducer;