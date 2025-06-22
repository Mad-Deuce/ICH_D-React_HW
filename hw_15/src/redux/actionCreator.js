import { SET_FILTER, SET_USER } from "./types";

export const setFilterCreator = payload => ({
    type: SET_FILTER,
    payload: payload,
});

export const setUserCreator = payload => ({
    type: SET_USER,
    payload: payload,
});


