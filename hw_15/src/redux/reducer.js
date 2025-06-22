import { SET_FILTER, SET_USER } from "./types";

const initialStore = {
    usersFilter: "",
    users: [
        {
            "id": 0,
            "name": "May"
        },
        {
            "id": 1,
            "name": "Claudia"
        },
        {
            "id": 2,
            "name": "Marjorie"
        },
        {
            "id": 3,
            "name": "Harry"
        },
        {
            "id": 4,
            "name": "Kenneth"
        },
        {
            "id": 5,
            "name": "Crystal"
        },
        {
            "id": 6,
            "name": "Cecilia"
        },
        {
            "id": 7,
            "name": "Brent"
        },
        {
            "id": 8,
            "name": "Daisy"
        },
        {
            "id": 9,
            "name": "Ed"
        }
    ],
    user: null,
};

const reducer = (store = initialStore, action) => {
    switch (action.type) {
        case SET_FILTER:
            return { ...store, usersFilter: action.payload };
        case SET_USER:
            return { ...store, user: action.payload };
        default:
            return store;
    }
};

export default reducer;