import { ALERT_SET, ALERT_REMOVE } from "../actions/types";
const initialState = []

function alertReducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case ALERT_SET:
            return [...state, payload];
        case ALERT_REMOVE:
            //filters from state a specific alert after 2.5 secs which is set in action alert
            return state.filter((alert) => alert.id !== payload);
        default:
            return state;
    }
}

export default alertReducer;