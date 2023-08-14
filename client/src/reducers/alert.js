import { ALERT_SET, ALERT_REMOVE } from "../actions/types";
initialState = []

export const alert = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ALERT_SET:
            return [...state, payload];
        case ALERT_REMOVE:
            return state.filter((alert) => alert.id != payload.id);
        default:
            return state;
    }
}