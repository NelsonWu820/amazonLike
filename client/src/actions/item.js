import { ITEMS_GET, ITEMS_ERROR, ITEM_GET, REMOVE_ITEM, COMMENT_ADDED, COMMENT_REMOVED } from "./types";
import { setAlert } from "./alert";
import api from '../utils/api';

//gets all items
export const getAllItems = () => async dispatch =>{
    try {
        const res = await api.get('/items')

        dispatch({
            type: ITEMS_GET,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: ITEMS_ERROR
        })
    }
} 

//gets an id by it's id
export const getItemById = (id) => async (dispatch) => {
    try {
        const res = await api.get(`/items/${id}`);

        dispatch({
            type: ITEM_GET,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: ITEMS_ERROR
        })
    }
}

//get items by there tag
export const getItemByTag = (tag) => async (dispatch) => {
    try {
        const res = await api.get(`/items/search/${tag}`);

        dispatch({
            type: ITEMS_GET,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: ITEMS_ERROR
        })
    }
}

//add comment with item id
export const addComment = (id, formData) => async (dispatch) => {
    try {
        const res = await api.post(`/items/comments/${id}`, formData);

        dispatch({
            type: COMMENT_ADDED,
            payload: res.data
        });

    } catch (err) {
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')))
        }
    }
}

//delete comment with item id
export const deleteComment = (id, comment_id) => async (dispatch) => {
    try {
        const res = await api.delete(`/items/comments/${id}/${comment_id}`);

        dispatch({
            type: COMMENT_REMOVED,
            payload: res.data
        });

    } catch (err) {
        
    }
}


//gets rid of item object from past
export const removeItem = () => async dispatch =>{
        dispatch({
            type: REMOVE_ITEM
        })
} 