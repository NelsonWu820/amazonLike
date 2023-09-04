import { ITEMS_GET, ITEMS_ERROR, ITEM_GET } from "./types";
import api from '../utils/api';

export const getAllItems = () => async dispatch =>{
    try {
        const res = await api.get('/items')

        dispatch({
            type: ITEMS_GET,
            payload: res.data
        })
    } catch (err) {
        console.log("Get all items error", err);
        dispatch({
            type: ITEMS_ERROR
        })
    }
} 

export const getItemById = (id) => async (dispatch) => {
    try {
        const res = await api.get(`/items/${id}`);

        dispatch({
            type: ITEM_GET,
            payload: res.data
        });

    } catch (err) {
        console.log("Get item by id error", err);
        dispatch({
            type: ITEMS_ERROR
        })
    }
}