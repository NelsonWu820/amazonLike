import { ITEMS_GET, ITEMS_ERROR, ITEM_GET, REMOVE_ITEM, COMMENT_ADDED, COMMENT_REMOVED } from "../actions/types";

const initialState = {
    items: [],
    item: {
        id: '',
        rating: 0,
        title: '',
        image: '',
        description: '',
        tag: '',
        price: '',
        comments: []
    },
    loading: true,

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
        //sets loading to be true so that when going back to home page comments will have to load first then it can take from state
        case ITEMS_GET:
            return {
                ...state,
                items: payload,
                loading: true
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
                item: null,
                loading: false
            }
        case COMMENT_REMOVED:
            return{
                ...state,
                //takes just one comment from the user only and filters it out
                item: {
                    ...state.item,
                    comments: state.item.comments.filter(
                        (comment) => comment._id.toString() !== payload.toString()
                    )
                },
                loading: false
            }
        default:
            return state;
    }
}

export default itemReducer;