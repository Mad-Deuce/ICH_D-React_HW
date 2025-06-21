import { SET_USER_INFO } from "./user-types.js";

export const setUserInfoCreator = (payload) => ({
    type: SET_USER_INFO,
    payload
});