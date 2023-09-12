import { CART_ITEM_ADDED, CART_ITEM_DELTED, HISTORY_ITEM_ADDED, HISTORY_ITEM_DELTED } from "../actions/types";
import { setAlert } from "./alert";
import api from '../utils/api';

export const cartAddItem = (amount, itemId) => async dispatch => {

        try {
            const res = await api.put(`/cart/${itemId}`, amount);

            dispatch({
                type: CART_ITEM_ADDED,
                payload: res.data
            });
        } catch (err) {
            console.log("Add Cart Error:", err);
    
        
    }
} 

//deletes an item in cart
export const cartRemoveItem = (itemId) => async dispatch => {

        try {
            const res = await api.delete(`/cart/${itemId}`);

            dispatch({
                type: CART_ITEM_DELTED,
                payload: res.data
            });
        } catch (err) {
            console.log("Delete Cart Error:", err);
    
        
    }
} 