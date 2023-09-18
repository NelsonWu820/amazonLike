import { CART_GET, CART_ITEM_ADDED, CART_ITEM_DELTED, HISTORY_GET, HISTORY_ITEM_ADDED } from "../actions/types";

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
            const itemsState = payload.map((item) => ({
                image: item.image,
                title: item.title,
                price: item.price,
                rating: item.rating,
              }));

            return{
                ...state,
                cart: [...itemsState, ...state.cart],
                loading: false
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
                history: [...cartState, ...state.history],
                historyLoading: false
            }
        default:
            return state
    }
}

export default cartReducer;