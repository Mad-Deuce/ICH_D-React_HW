
import { SET_USER_INFO } from "./user-types.js";

const defaultValue = {
    username: "John Doe",
    status: "online"
}

export const userReducer = (store = defaultValue, { type, payload }) => {
    switch (type) {
        case SET_USER_INFO:
            return payload;
        default:
            return store;
    }
}

