import { CART_ITEM_ADDED, CART_ITEM_DELTED, HISTORY_ITEM_ADDED, HISTORY_ITEM_DELTED } from "../actions/types";

const initialState = {
    cart: [],
    history: [],
    loading: true
}

function cartReducer(state = initialState, action){
    const { type, payload } = action
    switch (type){
        case CART_ITEM_ADDED:
            return{
                ...state,
                cart: [...state.cart, ...payload],
                loading: false
            }
        case CART_ITEM_DELTED:
            return state.cart.filter((id) => id !== payload)
            
        default:
            return state
    }
}

export default cartReducer;