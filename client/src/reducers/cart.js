import { CART_GET, CART_ITEM_ADDED, CART_ITEM_DELTED, CART_ITEM_ERROR, HISTORY_GET, HISTORY_ITEM_ADDED, LOGOUT } from "../actions/types";

const initialState = {
    cart: [],
    history: [],
    loading: true,
    historyLoading: true,
}

function cartReducer(state = initialState, action){
    const { type, payload } = action
    switch (type){
        case CART_GET:
            return{
                ...state,
                cart: payload,
                loading: false
            }
        case CART_ITEM_ADDED:
            //adds multiple objects to itemState from user
            const itemsState = payload.map((item) => ({
                image: item.image,
                title: item.title,
                price: item.price,
                rating: item.rating,
              }));

            return{
                ...state,
                //each object get spread first then the past cart so new items are on top
                cart: [...itemsState, ...state.cart],
                loading: false
            }
        case CART_ITEM_ERROR:
            return {
                ...state
            }
        case CART_ITEM_DELTED:
            const newState = state.cart.filter((item) =>(
                item._id !== payload
            ))
            return{
                ...state,
                cart: [...newState]
                }
        case HISTORY_GET:
            return{
                ...state,
                history: payload,
                historyLoading: false
            }
        case HISTORY_ITEM_ADDED:
            //adds multiple objects to cartState from user
            const cartState = payload.map((item) => ({
                id: item.id,
                image: item.image,
                title: item.title,
                price: item.price,
                rating: item.rating,
                tag: item.tag
              }));
            return{
                ...state,
                cart: [],
                //each object get spread first then the past cart so new items are on top
                history: [...cartState, ...state.history],
                historyLoading: false
            }
        case LOGOUT:
            return{
                cart: [],
                history: [],
                loading: true,
                historyLoading: true,
            }
        default:
            return state
    }
}

export default cartReducer;