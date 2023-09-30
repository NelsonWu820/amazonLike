import { ALERT_SET, ALERT_REMOVE } from "./types";
import {v4 as uuidv4} from 'uuid';

//make an alert with set time to delete
export const setAlert = (msg, alertType, timeout = 2500) => dispatch => {
    //every alert has its own id
    const id = uuidv4(); 

    dispatch({
        type: ALERT_SET,
        payload: {msg, alertType, id}
    })

    setTimeout(() => dispatch({type: ALERT_REMOVE, payload: id}), timeout);
};