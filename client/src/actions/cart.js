import { CART_GET, CART_ITEM_ADDED, CART_ITEM_DELTED, HISTORY_GET, HISTORY_ITEM_ADDED } from "../actions/types";
import { setAlert } from "./alert";
import api from '../utils/api';

//get all items in cart db
export const getCart = () => async dispatch => {

    try {
        const res = await api.get('/cart');

        dispatch({
            type: CART_GET,
            payload: res.data
        });
    } catch (err) {
        console.log("Add Cart Error:", err);
    }
} 

//add item in cart by amount and the id
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
export const cartRemoveItem = (id) => async dispatch => {

        try {
            const res = await api.delete(`/cart/${id}`);

            dispatch({
                type: CART_ITEM_DELTED,
                payload: res.data
            });
        } catch (err) {
            console.log("Delete Cart Error:", err);
    
        
    }
} 

//takes from cart and places it into history
export const historyAddItem = (cart) => async dispatch => {

    try {

        let jsonCart = JSON.stringify(cart);
        const res = await api.post('/cart/history', jsonCart);

        dispatch({
            type: HISTORY_ITEM_ADDED,
            payload: res.data
        });
    } catch (err) {
        console.log("Add History Error:", err);
    }
} 

//get history
export const getHistory = () => async dispatch => {
    try {
        const res = await api.get('/cart/history');

        dispatch({
            type: HISTORY_GET,
            payload: res.data
        });
    } catch (err) {
        console.log("Add History Error:", err);
    }
} 